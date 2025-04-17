import TailButton from "../UI/TailButton"
import TailBall from "../UI/TailBall"
import { useState } from "react";

export default function Lotto() {

    const [lottoTags, setLottoTags] = useState([]) ; //빈배열 생성
    
    const handleLottoNum = () =>{
        let lottoNum = [];

        while(lottoNum.length < 7){
            let n = Math.floor(Math.random()*45) + 1; //메서드는 ()넣어주기
        
            //랜덤수 배열넣기
            if(!lottoNum.includes(n))  lottoNum.push(n);//includes #trud/false
        }

        //보너스 번호 
        let bonus = lottoNum.splice(-1); //splice #배열 결과

        //로또 번호 정렬
        lottoNum.sort((a,b) => a-b);

        //로또 배열 다시 생성
        lottoNum=[...lottoNum, '+', ...bonus];

        // lottoTags = lottoNum; //오류
       // setLottoTags(lottoNum); //TailBall 적용이 안됨
       //TailBall 만들기
       let tm = lottoNum.map(item => item ==='+' ? <span className="w-16 h-16 flex justify-center items-center text-4xl font-bold mr-5"> {item} </span>
                                            :<TailBall key={'n' + item} n={item}/>)
        setLottoTags(tm);

        console.log("lottoNum", lottoNum);
    }

  
    return (
    <div className="w-11/12 h-full flex flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center mb-10">
        {lottoTags}
      </div>
      <div>
        <TailButton caption="로또번호생성" color="blue" onClick={handleLottoNum}/>
      </div>
    </div>
  )
}
