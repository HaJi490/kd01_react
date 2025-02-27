import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// index.html에 있는 root와 연결
createRoot(document.getElementById('root')).render(
  //내부적으로 한번더 검사
  <StrictMode> 
    {/* App.jsx끼워넣기 -> return 값이 옴*/}
    <App /> 
  </StrictMode>,
)
