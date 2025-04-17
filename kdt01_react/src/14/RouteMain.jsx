import RouteHome from "./RouteHome"
import RoutePage1 from "./RoutePage1"
import RoutePage2 from "./RoutePage2"
import RouteNav from "./RouteNav"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function RouteMain() {
    return (
        // 지금부터 쓰는 경로를 같이 쓸수 있음
        <BrowserRouter>
            <div className="flex flex-col justify-center items-center">
                {/* Routes밖에두면 경로 영향x */}
                <RouteNav />
                <Routes>
                    {/* path #url경로 설정# element #컴포넌트 */}
                    <Route path="/" element={<RouteHome />} />
                    {/* p1: Link  /:item #브라우저 주소에 값을 담아서 보냄 #이름은 맘대로 #반드시 1, 2값을 다 넣어줘야함*/}
                    <Route path="/p1/:item1/:item2" element={<RoutePage1 />} />
                    {/* p2: Navigate */}
                    <Route path="/p2" element={<RoutePage2 />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
