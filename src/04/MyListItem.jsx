import { FaRegHeart } from "react-icons/fa";
//1. useState Hook import
import { useState } from "react";

export default function MyListItem({d1, d2, img, show}) {
    let cnt = 0;
    //2. state 변수 선언
    const[stCnt, setStCnt] = useState(0);

    let click = ()=>{
        cnt = cnt +1;
         //3. state 변수 변경
        setStCnt(stCnt + 1);
        console.log(cnt);
    }

  return (
    <div className="border border-stone-200 flex flex-row">
       {/* {img}아님 이미지는 <img src> // root기준 경로*/}
        <img src={img} className="w-1/4  mr-0.5 m-3"></img>
        
        <div className="w-3/4 m-5">
            <h1 className="h-1/4 font-bold ">
            {d1} 
            </h1>
            <div className="h-2/4 text-xs pb-1">
            {d2}
            </div>
            
            {/* {show && <div className=" h-1/4 w-max p-1 px-2 border rounded-md 
                             flex justify-center items-center 
                             text-xs font-bold ">
            <FaRegHeart className="mr-1"/> 좋아요 {cnt}
            </div>} */}
           <div className=" h-1/4 
                            flex flex-row justify-end items-end 
                            text-xs font-bold ">
            {show && 
                //4.이벤트 받기
                <span onClick={() => click()} 
                    className="cursor-pointer flex border border-amber-950 text-amber-950 rounded-sm p-1 pr-2
                                click">
                <FaRegHeart className="mr-1 mt-0.5"/> 좋아요 {stCnt}
                </span>}
            </div>
        </div>
    </div>
  )
}
