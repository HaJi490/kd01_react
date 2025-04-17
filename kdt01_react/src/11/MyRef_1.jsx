import { useState, useEffect, useRef } from "react";
import TailButton from "../UI/TailButton"

export default function MyRef() {
    //컴포넌트 변수
    let cnt = 0;
    //state 변수
    const [stCnt, setStCnt] = useState(0);
    //ref 변수
    const refCnt = useRef(0);

    //컴포넌트 변수 증가
    const handleCnt = ()=>{
        cnt = cnt +1;
        console.log("cnt= ", cnt);
    }

    //state 변수 증가
    const handleStCnt = ()=>{
        setStCnt(stCnt +1);
    }

    //Ref 변수 증가
    const handleRefCnt = ()=>{
        refCnt.current = refCnt.current + 1;
        console.log("refCnt= ", refCnt.current);
    }

    //state변수가 변경되었을 때
    useEffect(()=>{
        console.log("stCnt= ", stCnt);
    },[stCnt]);

  return (
    <div className="w-full flex justify-center items-start mt-10">
        <div className="w-10/12 grid grid-cols-3 gap-4">
            <div className="flex justify-center items-end my-5 text-2xl font-bold">
                컴포넌트 변수: {cnt}
            </div>
            <div className="flex justify-center items-end my-5 text-2xl font-bold">
                State 변수: {stCnt}
            </div>
            <div className="flex justify-center items-end my-5 text-2xl font-bold">
                Ref 변수: {refCnt.current}
            </div>
            <TailButton caption = "컴포넌트 변수 증가" color="blue" onClick={handleCnt} />
            <TailButton caption = "State 변수 증가" color="blue" onClick={handleStCnt} />
            <TailButton caption = "Ref 변수 증가" color="blue" onClick={handleRefCnt} />
        </div>
    </div>
  )
}
