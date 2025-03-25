
import RouteHome from "./RouteHome"
import RoutePage1 from "./RoutePage1"
import RoutePage2 from "./RoutePage2"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function RouteMain() {
  return (
     // 지금부터 쓰는 경로를 같이 쓸수 있음
     <BrowserRouter>
     <div>
         <Routes>
             <Route path="/" element={<RouteHome />}/>              
             <Route path="/p1" element={<RoutePage1 />}/>              
             <Route path="/p2" element={<RoutePage2 />}/>              
         </Routes>
     </div>
 </BrowserRouter>
  )
}
