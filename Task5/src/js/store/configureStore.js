import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware, { END } from 'redux-saga'
import rootReducer from '../reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware()

    const store = createStore(
        persistedReducer,
        initialState,
        compose(
            applyMiddleware(
                sagaMiddleware,
                createLogger()
            )
        )
    );
    const persistor = persistStore(store);

    /*if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }*/

    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);
    return {store, persistor};
}