import 'antd/dist/antd.css'
import './App.css'

import React from 'react'
import Routes from './router'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './components/navigation'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes />
      </BrowserRouter>
    </div>
  )
}

export default App
