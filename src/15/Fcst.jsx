import getxy from "./getxy.json"

import TailSelect from "../UI/TailSelect"; 
import TailButton from "../UI/TailButton";

import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";

export default function Fcst() {
    //ref 변수
    const refdt = useRef();
    const refsel = useRef();

    //navigete 변수
    const navigate = useNavigate();

    /**** Date ****/
    //날짜 가져오기
    const getToday =() =>{
        let dt = new Date();
        dt.setDate(dt.getDate());

        //연도 4자리
        let year = dt.getFullYear();

        //월 #Month는 0부터 시작
        let month = String(dt.getMonth()+1).padStart(2, '0');

        //일
        let day = String(dt.getDate()).padStart(2, '0');

        return (year +"-"+ month +"-"+ day);
    }

    //오늘 날짜 기본설정
    useEffect(()=>{
        refdt.current.value = getToday();
    },[])

    const handleChange=()=>{
        console.log(refsel.current.value);
    }


    /**** 지역설정 ****/
    //지역 sel
    let location = getxy.map(item => item["1단계"]);
    location = ["---시도 선택---",...location];
    console.log("지역= ", location);
    
    //선택했을 때
    const handleClick = (gubun) =>{
        //선택 안했을때
        if(refsel.current.value == "---시도 선택---"){
            alert("시도를 선택해주세요.");
            refsel.current.focus();
            return;
        }

        //xy값
        const tm = getxy.filter(item => item["1단계"] == refsel.current.value)[0];

        // const x = get.map(item => item["격자 X"]);
        // const y = get.map(item => item["격자 Y"]);
        const x = tm["격자 X"];
        const y = tm["격자 Y"];
        
        console.log(refdt.current.value, refsel.current.value, gubun);
        navigate(`/fcstlist?gubun=${gubun}&date=${refdt.current.value}&loca=${refsel.current.value}&x=${x}&y=${y}`)
    }

  return (
    //onSubmit={(e)=>preventDefault()}
    // <form onSubmit={(e)=>preventDefault()}>
    <div>
        <h2 className="font-bold ">
            일기예보
        </h2>
        <input type="date" ref={refdt}/>
        <TailSelect id ="sel"
                refSel ={refsel}
                ops ={location}
                handleChange={handleChange}/>
    
        <TailButton caption ="초단기 예보" color="lime" 
                    onClick={()=>handleClick("초단기예보")} />

        <TailButton caption ="단기 예보" color="lime" 
                    onClick={()=>handleClick("단기예보")} />
    </div>
    //  </form>
  )
}
