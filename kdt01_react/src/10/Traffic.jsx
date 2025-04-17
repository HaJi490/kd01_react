
import TrafficNav from './TrafficNav';
import { useState, useEffect } from "react";

export default function Traffic() {
    // fetch된 전체 데이터
    const[tdata, setTdata] = useState([]);

    //대분류 데이터
    const[c1, setC1] = useState();
    const[selC1, setSelC1] = useState();

    // 사고유형 데이터
    const[c2, setC2] = useState();
    const[selC2, setSelC2] = useState();

    //정보 데이터
    const[info, setInfo] = useState();

    //data fetch : 사고유형 정보 가져오기
    const getFetchData = async() =>{
        const ApiKey = import.meta.env.VITE_APP_DATA_KEY;
        let url = `https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?page=1&perPage=18&serviceKey=`;
        url = `${url}${ApiKey}`

        console.log(url);
        const resp = await fetch(url);
        const data = await resp.json(); //json데이터가 넘어옴

        setTdata(data.data);
        //console.log("tdata", tdata); ->1-1. 데이터가 바뀌는 중이어서 빈배열이 나옴
    }

    //tdata fetch(컴포넌트 생성시 한번실행)
    useEffect(()=>{
        getFetchData();
    },[]);

    //대분류 데이터(tdata 변경될때마다 다시 실행)
    useEffect(()=>{
        if (tdata.length <= 0 )return;  //맨처음 초기화단계를 걸러줌
        console.log("tdata ", tdata) //1-2.useEffect를 통해 tdata를 받아왔을 때 실행
        let tm = tdata.map(item=> item["사고유형대분류"]); //결과 18개
        //Set #중복제거 + 집합으로 반환(집합은 중북을 허용하지 않음 / 집합은 map안됨)
        tm = [...new Set(tm)];
        console.log(tm); //문자열이랑 보내면 배열로 안됨
        setC1(tm); 
    },[tdata]);

    //대분류 선택 콘솔
    useEffect(()=>{
      console.log(selC1);
    },[selC1]);


    //사고유형 데이터
    useEffect(()=>{
      // setC2([]);
      // setSelC2([]);
      // setInfo([]);

      //사고유형 추출
      let tm = tdata.filter(item=> item["사고유형대분류"] ==selC1)
                      .map(item=>item["사고유형"]);
      //중복제거(맵으로 함)
      //tm = [...new Set(tm)];
      console.log(tm); 
      setC2(tm); 
    },[selC1]);


    //정보 데이터(대분류와 사고유형이 선택될때)
    useEffect(()=>{
      if(selC1 == undefined || selC2 == undefined) return;

      let tm = tdata.filter(item=> item["사고유형대분류"] ==selC1 && item["사고유형"] ==selC2);
      tm=tm[0]; //tm결과 : 1개/배열
        //.map(item=>item["사고건수"] );
        //, item["사망자수"], item["중상자수"], item["경상자수"], item["부상신고자수"]
      console.log(tm);
      setInfo(tm);

      let infoKey = ["사고건수", "사망자수", "중상자수", "경상자수", "부상신고자수"];
      let tr = infoKey.map(i => <div key={i} className='w-1/5 my-5 text-sm
                                                        flex justify- center items-center'>
                              <span className='p-1 rounded '>
                                {i}
                              </span>
                              <span className='font-bold'>
                                {tm[i]}
                              </span>
                              </div> );
       console.log(tr);
       setInfo(tr);                       
    }, [selC2])


  return (
    <div className='w-11/12'>
      <div className="w-full flex flex-col justify-between items-center">
        {/* c1 기본값인 빈배열이 보내지고 배열이 채워졌을 때 한번 더 보내짐 */}
        {c1 && <TrafficNav title="대분류"
                    ct={c1}
                    selC={selC1}
                    setselC={setSelC1}/>}

        {c2 && <TrafficNav title="사고유형"
                    ct={c2}
                    selC={selC2}
                    setselC={setSelC2}/>}
        <div className='w-full flex item-center  border border-y-amber-950 border-y-1 border-x-0'>
          {info}
        </div>
      </div>
    </div>
  )
}
