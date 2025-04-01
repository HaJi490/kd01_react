import MyDiv2 from "./MyDiv2"
import { useCnt } from "./useCnt"; //훅처럼 사용
import { useState, useEffect } from "react";
export default function MyDiv1() {
    const n = useCnt((state)=> state.cnt);
    const [n2, setN2] = useState();

    useEffect(()=>{
      setN2(n * 2);

    },[n]);

  return (
    <div className="w-8/10 h-8/10 
                    bg-lime-950 text-white text-2xl
                     p-10
                    flex flex-col justify-center items-center">
      <div className="w-full text-left mb-10 text-sm">
        (zustand) n = {n}, n2 = {n2}
      </div>
      <MyDiv2 />
    </div>
  )
}
