import { useEffect, useState } from "react"
import TailButtonLine from "../UI/TailiButtonLine"

export default function MyEffect() {
    const[msg, setMsg] = useState('');
    const[color, setColor] = useState('blue');
    const handleClick = () => {
        if (msg === '') setMsg ("useEffect 예제 : state변수 변경시");
        else setMsg('');
    };

    const handleClick2 = () => {

    };

  //useEffect 사용법
  //1. 컴포넌트 생성시 한번
  useEffect(()=>{
    console.log("의존성 배열 []일 때 컴포넌트 생성시 한번 실행");
    console.log("msg =", msg);
    console.log("color =", color);
  },[]);

  //2. 특정 state변수 값이 변경될때 마다
  useEffect(()=>{
    //setColor(color === "blue" ? "orange" : "blue");
    console.log("state변수 useEffect msg = ", msg);
    //console.log("state변수 useEffect color = ", color);
  },[msg]);

  //3. 어떤 state변수든 변경(화면이 렌더링) 될때마다 실행
  useEffect(()=>{
    console.log("useEffect msg =", msg);
    console.log("useEffect color =", color);
  });

  return (
    <div className="w-full text-2xl font-bold
                    flex flex-col justify-center items-center">
        <div className="text-2xl m-2 h-20">
            {msg}
        </div>
      <TailButtonLine caption="useEffect 예제"
                        color="blue"
                        onClick={handleClick}/>
                        <TailiButtonLine caption="useEffect 예제"
                        color={color}
                        onClick={handleClick2}/>
    </div>
  )
}
