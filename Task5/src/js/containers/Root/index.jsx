import React, { Component } from 'react'
import { Provider } from 'react-redux'
import PropTypes from "prop-types";
import {DocumentComponent} from "../../components/DocumentComponent";
import { PersistGate } from 'redux-persist/integration/react'
/*import { Router, RouterContext } from 'react-router'*/

export default class Root extends Component {
    render() {
        const { store, persistor, history, routes, type, renderProps } = this.props;

        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <DocumentComponent/>
                </PersistGate>
            </Provider>
            /*<Provider store={store}>
                <div>
                    {{ type === 'server'
                        ? <RouterContext {...renderProps} />
                        : <Router history={history} routes={routes} />
                    }
                    <DevTools />}
                </div>
            </Provider>*/
        )
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    /*history: PropTypes.object.isRequired,
    routes: PropTypes.node.isRequired*/
};