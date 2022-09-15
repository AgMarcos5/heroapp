import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { HeroesApp } from './HeroesApp'

import { Provider } from 'react-redux'
import { store } from './store/store'

import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <Router>
       <HeroesApp />
    </Router>
  </Provider>
  </React.StrictMode>
)
