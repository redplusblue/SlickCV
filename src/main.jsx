import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainComponent } from './components/SharedSection'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('main')).render(
<React.StrictMode>
  <MainComponent />
</React.StrictMode>,
)