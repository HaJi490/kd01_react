//Link는 하이퍼링크 효과
import { Link } from "react-router-dom"

export default function RouteNav() {

  return (
    // pb-2 border-0 border-b-2 border-stone-200
    <div className="flex items-center justify-between w-full">
        <ul className="flex flex-row 
                        p-4 md:p-0 rounded-lg
                        md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white
                        font-medium">
            <li className="mr-5 block py-2 px-3 text-stone-900 rounded-sm 
                        hover:bg-stone-100 md:hover:bg-transparent md:p-0">
                {/* li태그에 넣는거 보다 선택 범위 늘어남 */}
                <Link to="/" className="p-3 hover:text-amber-700">Home</Link>
            </li>
            <li className="mr-5 block py-2 px-3 text-stone-900 rounded-sm hover:bg-stone-100 md:hover:bg-transparent md:p-0">
                <Link to="/p1/m/m" className="p-3 hover:text-amber-700">Page1</Link>
            </li>
            <li className="mr-5block py-2 px-3 text-stone-900 rounded-sm hover:bg-stone-100 md:hover:bg-transparent md:p-0 ">
                <Link to="/p2" className="p-3 hover:text-amber-700">Page2</Link>
            </li>
        </ul>
    </div>
  )
}
