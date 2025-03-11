//오타있어서 TailButton..으로 새로만들었는데 오류뜸.. >>function이름이 그대로여서
import TailButtonLine from "../UI/TailButtonLine";
import { useState } from "react"

//MyToggle에서 받은 props
export default function MyToggleBox({color}) {
    const bg700={
        "blue" : "bg-blue-700",
        "orange" : "bg-orange-700",
    }

    //const[handleBg, setHandleBg] = useState(bg700.gray);
    const[handleBg, setHandleBg] = useState(false);

    const clickBg =() =>{
        setHandleBg(!handleBg);
    };

    return (
        // {``} 백택쓸때 중괄호
        // && 둘중하나가 거짓이면 거짓 
        <div className={`w-full flex flex-col justify-center items-center p-5
                       ${handleBg && bg700[color]}`}>
            {/* 이 div가 있으면 박스크기가 같아짐 */}
           <div className="flex flex-col">
            {/* props 전달 */}
            {/* onClick ={비워서 보내면 오류} */}
            <TailButtonLine caption={color} color="gray" onClick={()=>{}} />
            <TailButtonLine caption={`${color} Toggle`} color={color} onClick={clickBg} />
            </div>
        </div>
    )
}
