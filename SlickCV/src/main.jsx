import React from 'react'
import ReactDOM from 'react-dom/client'
import {Forms} from './Forms.jsx'
import './styles/index.css'
import './styles/preview.css'

ReactDOM.createRoot(document.getElementById('form-container')).render(
  <React.StrictMode>
    <Forms />
  </React.StrictMode>,
)
