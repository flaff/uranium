import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import store, {history} from './store';

import {AppContainer} from 'react-hot-loader';

import './global-css/index.css';
import './global-css/fontawesome.css';
import './global-css/fa-regular.css';
import './global-css/fa-solid.css';
import './global-css/fonts.css';
import './global-css/text.css';
import './global-css/bootstrap-reboot.css';

const render = (Component) => {
    ReactDOM.render(
        (
            <AppContainer>
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <Component/>
                    </ConnectedRouter>
                </Provider>
            </AppContainer>
        ),
            document.getElementById('root')
    )
}

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./App', () => {
        render(App)
    })
}

registerServiceWorker();
