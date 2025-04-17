import TailButton from "../UI/TailButton";
import { useState } from "react";

//속성명으로 받을때(넘어오는게 Object여서 구조분해가 가능하기 때문에 가능)
export default function MyDiv3({ n, setN}) {

  return (
    <div className="w-8/10 h-8/10 
                     bg-lime-500 text-white text-2xl
                     p-10
                    flex flex-col justify-center items-center">
        <div className="w-full grid grid-cols-2 gap-4">
            <TailButton caption="증가" 
                        color="lime" 
                        onClick={()=>setN(n+1)}/>
            <TailButton caption="감소" 
            color="lime" 
            onClick={()=>setN(n-1)}/>
        </div>
    </div>
  )
}
