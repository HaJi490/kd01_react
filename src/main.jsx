import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// index.html에 있는 root와 연결
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* App.jsx끼워넣기 -> return 값이 옴*/}
    <App /> 
  </StrictMode>,
)
