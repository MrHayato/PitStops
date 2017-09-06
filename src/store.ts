import {
    applyMiddleware,
    compose,
    createStore,
    Middleware,
    StoreEnhancer,
} from 'redux';
import { rootReducer } from './reducers';

declare var __DEVELOPMENT__: boolean;

declare global { /* tslint:disable-line */
    interface Window { /* tslint:disable-line */
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose;
    }
}

export async function configureStore() {
    const middleware: Middleware[] = [];
    let enhancer: StoreEnhancer<any>;

    if (__DEVELOPMENT__) {
        // Using require will prevent the dev tools from being included in the bundle
        const freeze: Middleware = require('redux-freeze'); /* tslint:disable-line */
        const { createLogger } = require('redux-logger'); /* tslint:disable-line */

        middleware.push(freeze);
        middleware.push(createLogger());

        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        enhancer = composeEnhancers(
            applyMiddleware(...middleware),
        );
    } else {
        enhancer = applyMiddleware(...middleware);
    }

    const store = createStore(rootReducer, enhancer);

    if (module.hot) {
        module.hot.accept('./reducers', async () => {
            const nextReducer = await import('./reducers');
            store.replaceReducer(nextReducer.rootReducer);
        });
    }

    return store;
}
