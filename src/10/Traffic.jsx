import { useState, useEffect } from "react";

export default function Traffic() {
    // fetch된 전체 데이터
    const[tdata, setTdata] = useState([]);

    //대분류 데이터
    const[c1, setC1] = useState([]);

    //data fetch : 사고유형 정보 가져오기
    const getFetchData = async() =>{
        const ApiKey = import.meta.env.VITE_APP_DATA_KEY;
        let url = `https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?page=1&perPage=18&serviceKey=`;
        url = `${url}${ApiKey}`

        console.log(url);
        const resp = await fetch(url);
        const data = await resp.json(); //json데이터가 넘어옴

        setTdata(data.data);
 
    }

    


    useEffect(()=>{
        getFetchData();
    },[]);

    useEffect(()=>{
        if (tdata.length <= 0 )return;
        console.log("tdata ", tdata)
        let tm = tdata.map(item=> item["사고유형대분류"]);
        //Set #중복제거 + 집합으로 반환
        tm = [...new Set(tm)];
        setC1(tm);
        console.log("c1 : ")
    },[tdata]);

    


  return (
    <div>
      
    </div>
  )
}
