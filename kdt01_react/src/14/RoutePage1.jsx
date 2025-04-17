import { useParams } from "react-router-dom"

export default function RoutePage1() {
    const {item1, item2} = useParams();
    
    console.log(item1, item2);
  return (
    <div className="w-11/12 p-3 bg-stone-100 rounded-md text-stone-600  font-bold flex justify-center">
        {item1 == 'm' ? '메뉴페이지 입니다.':`${item1}는 ${item2}입니다.`}
    </div>
  )
}
