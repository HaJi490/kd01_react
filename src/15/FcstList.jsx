import getcode from './getcode.json'

import TailSelect from "../UI/TailSelect";

import { useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function FcstList() {
    //state 변수
    const[tags, setTags]= useState();
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
        if(gubun == '초단기예보'){
            tm = "getVilageFcst";
        }else if( gubun == "단기예보"){
            tm = "getUltraSrtFcst";
        }else{
            alert("gubun 오류");
        }

        const ApiKey = import.meta.env.VITE_APP_DATA_KEY ;
        date = date.replaceAll('-','');
        let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/${tm}?`
        url = `${url}serviceKey=${ApiKey}&pageNo=1&numOfRows=1000`;
        url=`${url}&dataType=JSON&base_date=${date}&base_time=0500&nx=${x}&ny=${y}`;
        console.log("url= ", url);
        
        const resp = await fetch(url);
        let data = await resp.json();

        data = data.response.body.items.item;
        setTags(data);
        
        console.log("tags= ", tags);
    }

    useEffect(()=>{
        getFetchData();
    },[]);


    useEffect(()=>{
        console.log("olist= ", olist);
        
    },[olist])

    //항목 가져오기
    let tr = getcode.filter(item=> item["예보구분"] == gubun)
                    .map(item => `${item["항목명"]}(${item["항목값"]})`);

    //refItem에서 받은 값에 해당하는 데이터
    const handleChange= () =>{
        console.log("refItem= ", refItem.current.value.split('(')[1].replaceAll(')', ''));
        let tm =  tags.filter(item => item.category == refItem.current.value.split('(')[1].replaceAll(')', '') )
                    .map(item => <tr key={item} 
                    className="w-full bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 
                                hover:cursor-pointer hover:font-bold hover:bg-stone-200">
                    <td scope="row" className="w-24 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {refItem.current.value}
                    </td>
                    <td className="w-1/7 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.baseDate}
                    </td>
                    <td className="w-1/7 px-6 py-4 text-right">
                        {item.baseTime}  
                    </td>
                    <td className="w-1/7 px-6 py-4 text-right">
                        {item.fcstValue} 
                    </td>
                </tr>);
       
        console.log(tm);
        setOlist(tm);
    };

  return (
    <div>
         <h2 className="font-bold">
            {`${loca} ${gubun}(${date.replaceAll('-','.')})`}
        </h2>
        < TailSelect id="item" 
                    refSel ={refItem}
                    ops = {tr}
                    handleChange = {handleChange}/>
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
            </tbody>
        </table>
    </div>
  )
}
