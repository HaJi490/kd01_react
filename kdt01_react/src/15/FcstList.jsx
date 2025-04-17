import getcode from './getcode.json'

import TailSelect from "../UI/TailSelect";

import { useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function FcstList() {
    //state 변수
    const[tdata, setTdata]= useState();
    const[olist, setOlist] = useState();

    //ref 변수
    const refItem = useRef();

    //QueryString
    const [sParams] = useSearchParams();
    console.log('sParams= ', sParams);

    let gubun = sParams.get('gubun');
    let date = sParams.get('date');
    let loca = sParams.get('loca');
    let x = sParams.get('x');
    let y = sParams.get('y');
    console.log(gubun, date, loca, x, y);

    //data fetch
    const getFetchData=async()=>{
        let tm = "";    //const xx
        let baseTime = ""
        if(gubun == '초단기예보'){
            tm = "getUltraSrtFcst";
            baseTime = "0630"
        }else if( gubun == "단기예보"){
            tm = "getVilageFcst";
            baseTime = "0500"
        }else{
            alert("gubun 오류");
        }

        const ApiKey = import.meta.env.VITE_APP_DATA_KEY ;
        date = date.replaceAll('-','');
        let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/${tm}?`
        url = `${url}serviceKey=${ApiKey}&pageNo=1&numOfRows=1000`;
        url=`${url}&dataType=JSON&base_date=${date}&base_time=${baseTime}&nx=${x}&ny=${y}`;
        console.log("url= ", url);
        
        const resp = await fetch(url);
        let data = await resp.json();

        data = data.response.body.items.item;
        setTdata(data);
        
    }

    //컴포넌트가 로딩되었을 때
    useEffect(()=>{
        getFetchData();
    },[]);


    useEffect(()=>{
        //처음에 빈 데이터가 채워짐
        if(!tdata) return;

        console.log("tdata= ", tdata);
        //refItem값이 없을때 제일 윗항목 선택된것처럼
        handleChange();
    },[tdata])

    useEffect(()=>{
        if(!olist) return;
        console.log("olist= ", olist);
    },[olist])

    //항목 가져오기
    let tr = getcode.filter(item=> item["예보구분"] == gubun)
                    .map(item => `${item["항목명"]}(${item["항목값"]})`);

    //refItem에서 받은 값에 해당하는 데이터
    const handleChange= () =>{
        
        //예측값 기호
        const unit = getcode.filter(item => item["예보구분"] == gubun && item["항목값"] == refItem.current.value.split('(')[1].replaceAll(')', ''))[0]["단위"];
        console.log("unit= ", unit);
        
        //예측값
        const sky = {'1' : '맑음☀', '3':'구름많음☁', '4':'흐림☁'};
        
        const pty = gubun == '초단기예보'? {'0': '-', 
                        '1':'비', 
                        '2':'비/눈', 
                        '3':'눈',
                        '5':'빗방울', 
                        '6':'빗방울눈날림', 
                        '7':'눈날림'}
        
                        : {'0': '-', 
                        '1':'비', 
                        '2': '비/눈', 
                        '3': '눈', 
                        '4': '소나기'};
        
        
        //표 생성
        let code =  refItem.current.value.split('(')[1].replaceAll(')', '');
        console.log("refItem= ", code);
        let tm =  tdata.filter(item => item.category == code )
                    .map(item => <tr key={item.fcstDate + item.fcstTime} 
                    className="w-full bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 
                                hover:cursor-pointer hover:bg-stone-200">
                    <td scope="row" className="w-24 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {refItem.current.value}
                    </td>
                    <td className="w-1/7 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.baseDate.slice(0, 4) + '.' + item.baseDate.slice(4, 6) + '.' + item.baseDate.slice(6, 8)}
                    </td>
                    <td className="w-1/7 px-6 py-4 text-right">
                        {item.fcstTime.substr(0, 2) + ':' + item.fcstTime.substr(2,4)}  
                    </td>
                    <td className="w-1/7 px-6 py-4 text-right">
                        {code == 'SKY' ? `${sky[item.fcstValue]}`
                                        : code == 'PTY' ? `${pty[item.fcstValue]}`: `${item.fcstValue}${unit == '범주 (1 mm)'? '': unit}`}
                        {/* {item.fcstValue}{unit == '코드값' || unit =='범주 (1 mm)' ||  unit =='범주(1 cm)' ? '' : unit} */}
                    </td>
                </tr>);
       
        //console.log(tm);
        setOlist(tm);
    };

  return (
    <div className='w-10/12'>
        <div className='w-full mx-2 flex flex-row justify-between'>
            <h2 className="font-bold">
                {`${loca} ${gubun}(${date.replaceAll('-','.')})`}
            </h2>
            < TailSelect id="item" 
                        refSel ={refItem}
                        ops = {tr}
                        handleChange = {handleChange}
                        className='mb-5'/>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="w-full text-xs font-bold text-stone-700 uppercase bg-stone-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <td scope="col" className="px-6 py-3 w-24">
                        항목명
                    </td>
                    <td scope="col" className="px-6 py-3 w-1/7">
                        예측일자
                    </td>
                    <td scope="col" className="px-6 py-3 w-1/7">
                        예측시간
                    </td>
                    <td scope="col" className="px-6 py-3 w-1/7">
                        예측값
                    </td>
                </tr>
            </thead>
            <tbody className="w-full">
                {olist}
                {/* refItem.current.value == '' ? '항목을 선택해주세요' : */}
            </tbody>
        </table>
    </div>
  )
}
