import Login from "./Login";

import { useAtom } from "jotai"
import { isLogin } from "../atoms/IsLoginAtom"

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
     const [login, setLogin] = useAtom(isLogin); // login을 isLogin(Atom변수)로 쓰겠다
    //const [login] =useAtom(isLogin); // 가능

    //Atom변수는 새로고침할때마다 리셋되서 로그인 다시해야하니까 
    // localStorage에 저장된 정보를 이용해 Login정보 설정
    useEffect(()=>{
      const tm = localStorage.getItem('id');
      if(tm) setLogin(true);
    },[]);

  return (
    <div>
      {login ? <div className="p-6 space-y-4 md:space-y-6 sm:p-8 flex justify-center">
                  <span className="font-bold">{`${localStorage.getItem('id')}`}</span>님, 로그인이 되었습니다👋
                </div> 
                : <Login />}
      
    </div>
  )
}
