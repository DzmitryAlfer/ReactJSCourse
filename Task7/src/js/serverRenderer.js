import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom'
import Root from './containers/Root';
import configureStore from './store/configureStore';

function renderHTML(html, preloadedState) {
    return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/js/index.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
    return (req, res) => {
        const { store, persistor } = configureStore();

        const context = {};
        console.log('-------------------');
        console.log(`req.url=${req.url}`)
        console.log('-------------------');

        const root = (<Root Router={StaticRouter} context={context} requestLocation={req.url} store={store} persistor={persistor}/>);

        store.runSaga().done.then(() => {
          const htmlString = renderToString(root);
          console.log('-------------------');
          console.log(htmlString);
          console.log('-------------------');
          // context.url will contain the URL to redirect to if a <Redirect> was used
          if (context.url) {
            res.writeHead(302, {
              Location: context.url,
            });
            res.end();
            return;
          }
    
          const preloadedState = store.getState();
    
          res.send(renderHTML(htmlString, preloadedState));
        });

        // Do first render, starts initial actions.
        renderToString(root);
        // When the first render is finished, send the END action to redux-saga.
        store.close();
    };
}
