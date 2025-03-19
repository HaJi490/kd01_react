// import Hello from './01/Hello'
//  import MyClock from './02/MyClock';
// import MyDiv1 from './03/MyDiv1' ;
// import MyList from './04/MyList';
//import Lotto from './05/Lotto';
//import FoodMain from './06/FoodMain';
// import MyToggle from "./07/MyToggle";
//import MyEffect from "./08/MyEffect";
// import BoxOffice from './09/BoxOffice';
//import Traffic from './10/Traffic';
// import MyRef from './11/MyRef';
import Gallery from './12/Gallery';

import './02/MyClock.css'

import { GoHomeFill } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function App() {
  return (
    // full = 100%, screen - 100vh, @media : xl: 
    //<main>에 flex-grow잡히려면 flex flex-col 들어가야함
    <div className="w-full xl:w-8/10 h-screen mx-auto flex flex-col">
      <header className="w-full min-h-20 bg-amber-50 
                        px-10
                        flex justify-between items-center">
        <h1 className= "text-4xl text-amber-950 font-bold flex">
          KDT01
        </h1>
        <div className="text-m font-bold text-amber-950 flex items-center">
      <GoHomeFill />
      </div>
      </header>
      {/* flex-grow 화면에서 header와 footer값을 뺀 나머지를 차지함 // overflow 메인에만 스크롤 */}
      <main className="w-full flex-grow
                      pt-10 
                      flex flex-col justify-start items-center
                      overflow-y-auto">
      {/* <Hello /> */}
      {/* <MyClock/> */}
      {/* <MyDiv1/> */}
      {/* <MyList /> */}
      {/* <Lotto /> */}
      {/* <FoodMain /> */}
      {/* < MyToggle /> */}
      {/* <MyEffect/> */}
      {/* <BoxOffice/> */}
      {/* <Traffic/>/ */}
      {/* <MyRef/> */}
      <Gallery/>

      </main>
      <footer className="w-full min-h-20 bg-amber-950 px-10
                        flex flex-col justify-center items-start">
      <div className= "text-sm font-bold text-amber-50">
        AI 데이터 분석 풀스택 웹개발자 양성과정
      </div>
      <div className="text-xs font-medium text-amber-50 my-0.5">
      <p className="flex"><span className="mx-1.5"><FaPhoneAlt/></span> 010.000.0000</p>
      <p className="flex "><span className="mx-1.5"><MdEmail/></span> ddddddd@gmail.com</p>
      </div>

      </footer>
    </div>

  )
}
// 안하면 import 불가
export default App
