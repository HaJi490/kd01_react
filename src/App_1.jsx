import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CiLollipop } from "react-icons/ci";

function App() {
// userstate 지워줘야함 > 지움
  return (
    // 프래그먼트 태그
    <div className="w-full h-full ">
      <div className='w-full flex justify-center items-center p-10'>
        <a href="https://vite.dev" target="_blank"  >
        {/* class는 예약어여서 사용x -> className*/}
          <img src={viteLogo} className="logo" alt="Vite logo"/>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='font-bold text-2xl '>Vite + React</h1>
      <div className="card">
        <p className='tracking-tight text-sm -m-5'>
          부산대학교 KDT 1기 하지원
        </p>
      </div>
      <p className="w-full flex justify-center text-fuchsia-400  items-center text-5xl">
      <CiLollipop />
      </p>
    </div>
  )
}
// 안하면 import 불가
export default App
