import TailButton from "../UI/TailButton"
import { Link, useNavigate } from "react-router-dom"

export default function RouteHome() {
    const navigate = useNavigate();

  return (
    <div className="w-7/12">
        {/* ul / Link 사용 #item값 설정하고 Page1에 안쓰면 오류*/}
        <ul className="w-full grid grid-cols-1 gap-2">
            <li className="mb-2 border border-stone-600 rounded-md hover:bg-stone-100
                            flex justify-center">
                <Link to="/p1/🍎/과일" className="px-4 py-3">사과🍎</Link>
            </li>
            <li className="mb-2 border border-stone-600 rounded-md hover:bg-stone-100
                            flex justify-center">
                <Link to="/p1/🍌/과일" className="px-4 py-3">바나나🍌</Link>
            </li>
            <li className="mb-4 border border-stone-600 rounded-md hover:bg-stone-100
                            flex justify-center">
                <Link to="/p1/🥕/채소" className="px-4 py-3">당근🥕</Link>
            </li>
        </ul>
        {/* tailbutton / navigate 사용*/}
        <div className="w-full grid grid-cols-1 gap-2">
            {/* 브라우저 주소의 ?뒷부분 = 쿼리스트링 */}
            <TailButton caption="사과🍎" color="lime" 
                        onClick={()=> navigate("/p2?item1=🍎&item2=과일")}
                        className="px-4 py-3"/>
            <TailButton caption="바나나🍌" color="lime"
                        onClick={()=> navigate("/p2?item1=🍌&item2=과일")}/>
            < TailButton caption="당근🥕" color="lime"
                        onClick={()=> navigate("/p2?item1=🥕&item2=채소")}/>
        </div>
    </div>
  )
}
