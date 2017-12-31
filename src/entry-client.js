import React from 'react'
import { AsyncComponentProvider } from 'react-async-component'
import asyncBootstrapper from 'react-async-bootstrapper'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import createStore, { history } from 'store'

import App from 'App'

const store = createStore(window.__INITIAL_STATE__)

const rehydrateState = window.ASYNC_COMPONENTS_STATE

if (!__DEV__) {
  delete window.__INITIAL_STATE__
  delete window.ASYNC_COMPONENTS_STATE
}

const AppContainer = __DEV__
  ? require('react-hot-loader').AppContainer
  : ({ children }) => children

const render = () => {
  const app = (
    <AppContainer>
      <AsyncComponentProvider rehydrateState={rehydrateState}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </Provider>
      </AsyncComponentProvider>
    </AppContainer>
  )

  asyncBootstrapper(app).then(() =>
    hydrate(app, document.getElementById('app')),
  )
}

render()

if (module.hot) {
  module.hot.accept('App', render)
}