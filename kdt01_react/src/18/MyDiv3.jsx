import TailButton from "../UI/TailButton";
import { useCnt } from "./useCnt";
import { useState, useEffect } from "react";

//속성명으로 받을때(넘어오는게 Object여서 구조분해가 가능하기 때문에 가능)
export default function MyDiv3() {
  const n = useCnt((state)=> state.cnt);
  const increase = useCnt((state) => state.increase);
  const decrease = useCnt((state) => state.decrease);

  const handleSave = ()=>{
    localStorage.setItem("n", n); //f12 -> application(콘솔x) -> Local storage(값을 기억했다가 쓰고 싶을때)
    localStorage.setItem("n2", n2);
  }
  return (
    <div className="w-8/10 h-8/10 
                     bg-lime-500 text-white text-2xl
                     p-10
                    flex flex-col justify-center items-center">
        <div className="w-full grid grid-cols-2 gap-4">
            <TailButton caption="증가" 
                        color="lime" 
                        onClick={increase}/>
            <TailButton caption="감소" 
            color="lime" 
            onClick={decrease}/>
            <TailButton caption="저장" 
            color="blue" 
            onClick={handleSave}/>
        </div>
    </div>
  )
}
