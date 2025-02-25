import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* App.jsx끼워넣기 -> return 값이감*/}
    <App /> 
  </StrictMode>,
)
