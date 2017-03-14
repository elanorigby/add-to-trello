import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import 'styles/index.scss'
import PopupPage from './pages/PopupPage'
import { isAuthorized } from 'libs/trello-api'
import { openSettings } from 'libs/chrome'
import configureStore from './store'

if (!isAuthorized()) {
  openSettings()
}

const store = configureStore()

render(
  <Provider store={store}>
    <PopupPage />
  </Provider>,
  document.getElementById('root')
)
