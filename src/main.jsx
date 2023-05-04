import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Cars from './pages/Cars'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CariMobil } from './pages'
import store from './app/store'
import { Provider } from 'react-redux'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/cars' element={<Cars />} />
          <Route path='/cari-mobil' element={<CariMobil />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
