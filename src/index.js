import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'

import store from './store'
import App from './components/app'

const rootElement = document.getElementById('root')

const root = createRoot(rootElement)
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)

