import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider as ReduxProvider } from 'react-redux';
import App from './app';
import { configureStore } from './store';
import './styles';

(async () => {
    const rootEl = document.getElementById('app-container');
    const store = await configureStore();

    function renderApp(Root: typeof App) {
        render(
            <ReduxProvider store={store}>
                <AppContainer>
                    <Root />
                </AppContainer>
            </ReduxProvider>,
            rootEl,
        );
    }

    renderApp(App);

    // HMR
    if (module.hot) {
        module.hot.accept(async () => {
            const AppRoot = await import('./app');
            renderApp(AppRoot.default);
        });
    }
})();
