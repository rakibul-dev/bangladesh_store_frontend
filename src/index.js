import React from 'react'
// Alert
import { positions, Provider as AlertProvider, transitions } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'

// hello
const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
}

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App></App>
    </AlertProvider>
  </Provider>,

  document.getElementById('root'),
)
