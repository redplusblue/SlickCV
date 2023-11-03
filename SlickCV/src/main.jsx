import React from 'react'
import ReactDOM from 'react-dom/client'
import Forms from './Forms.jsx'
import './styles/index.css'
import Preview from './Preview.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Forms />
    <Preview />
  </React.StrictMode>,
)
