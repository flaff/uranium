import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import {createLogger} from 'redux-logger';

import combinedReducers from './reducers';

const
    DEV_ENV = (process.env.NODE_ENV === 'development'),

    history = createHistory(),

    initialState = window.__INITIAL_REDUX_STATE || {},
    enhancers = [],
    middleware = [
        thunk,
        routerMiddleware(history)
    ];

DEV_ENV && middleware.push(createLogger({collapsed: true, duration: true}));

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(
    combinedReducers,
    initialState,
    composedEnhancers
);

export default store;

export {
    history
};
