// import Hello from './01/Hello'
import MyClock from './02/MyClock';
// import MyDiv1 from './03/MyDiv1' ;
// import MyList from './04/MyList';
import Lotto from './05/Lotto';
import FoodMain from './06/FoodMain';
// import MyToggle from "./07/MyToggle";
//import MyEffect from "./08/MyEffect";
import BoxOffice from './09/BoxOffice';
import Traffic from './10/Traffic';
// import MyRef from './11/MyRef';
import Gallery from './12/Gallery';
import Festival from './13/Festival';
import RouteMain from './14/RouteMain';
import Fcst from './15/Fcst';
import FcstList from './15/FcstList';

import './02/MyClock.css'

import { GoHomeFill } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Link, useNavigate } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      {/* full = 100%, screen - 100vh, @media : xl: 
      main에 flex-grow잡히려면 flex flex-col 들어가야함 */}
      <div className="w-full xl:w-8/10 h-screen mx-auto flex flex-col">
        <header className="w-full min-h-30  bg-amber-50 ">
          <div className=' w-full h-2/3 flex justify-between items-center px-10'>                 
            <h1 className= "text-4xl text-amber-950 font-bold flex">
              KDT01
            </h1>
            <div className="text-m font-bold text-amber-950 flex items-center">
              <Link to='/'><GoHomeFill /></Link>
            </div>
          </div> 
          <div className="w-full h-1/3 px-10 bg-white shadow-xs flex justify-between items-center">
            <Link to='/lotto' className=' py-1 px-2  rounded-sm font-semibold text-stone-700  hover:bg-stone-50 hover:text-stone-300'>Lotto</Link>
            <Link to='/food' className=' py-1 px-2  rounded-sm font-semibold text-stone-700  hover:bg-stone-50 hover:text-stone-300'>FoodBank</Link>
            <Link to='/boxoffice' className='py-1 px-2  rounded-sm font-semibold text-stone-700  hover:bg-stone-50 hover:text-stone-300'>BoxOffice</Link>
            <Link to='/traffic' className=' py-1 px-2  rounded-sm font-semibold text-stone-700  hover:bg-stone-50 hover:text-stone-300'>Traffic</Link>
            <Link to='/gallery' className='py-1 px-2  rounded-sm font-semibold text-stone-700  hover:bg-stone-50 hover:text-stone-300'>Gallely</Link>
            <Link to='/festival' className='py-1 px-2  rounded-sm font-semibold text-stone-700  hover:bg-stone-50 hover:text-stone-300'>Festival</Link>
            <Link to='/fcst' className='py-1 px-2  rounded-sm font-semibold text-stone-700  hover:bg-stone-50 hover:text-stone-300'>일기예보</Link>
          </div>
        </header>
        {/* flex-grow 화면에서 header와 footer값을 뺀 나머지를 차지함 // overflow 메인에만 스크롤 */}
        <main className="w-full flex-grow
                        pt-10 
                        flex flex-col justify-start items-center
                        overflow-y-auto">
          <Routes>
            <Route path='/' element={<MyClock/>}/>
            <Route path='/lotto' element={<Lotto />}/>
            <Route path='/food' element={<FoodMain />}/>
            <Route path='/boxoffice' element={<BoxOffice/>}/>
            <Route path='/traffic' element={<Traffic/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/festival' element={<Festival/>}/>
            <Route path='/router' element={<RouteMain/>}/>
            <Route path='/fcst' element={<Fcst/>}/>
            <Route path='/fcstlist' element={<FcstList/>}/>
          </Routes>
        {/* <Hello /> */}
        {/* <MyDiv1/> */}
        {/* <MyList /> */}
        {/* < MyToggle /> */}
        {/* <MyEffect/> */} 
        {/* <MyRef/> */}
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
    </BrowserRouter>
  )
}
// 안하면 import 불가
export default App
