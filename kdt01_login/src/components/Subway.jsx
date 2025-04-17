import TailSelect from '../ui/TailSelect'
import sarea from '../db/sarea.json'
import scode from '../db/scode.json'

import { useEffect, useState, useRef } from "react";
import { MdCo2 } from 'react-icons/md';

export default function Subway() {
  //state변수
  const[tdata, setTdata] = useState();
  const[tags, setTags] = useState();

  //ref변수
  const refSel = useRef();

  //data fetch
  const fetchData = async(sel)=>{
    const apiKey = import.meta.env.VITE_APP_DATA_KEY;
    let url = `https://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation`
    url = `${url}?serviceKey=${apiKey}&pageNo=1&numOfRows=5&resultType=JSON&controlnumber=${new Date().toISOString().slice(0, 10).replaceAll('-','')}07&areaIndex=${sel}`
    //url 확인
    console.log('url= ', url);

    const resp = await fetch(url);
    let data = await resp.json();

    data = data.response.body.items.item;
    setTdata(data);
  }

  //컴포넌트가 로딩되었을 때
  useEffect(()=>{
    fetchData('201193');
  },[])

  //tdata가 채워졌을때
  useEffect(()=>{
    //빈데이터 리턴
    if(!tdata) return;
    
    console.log('tdata= ', tdata)
    
    console.log("키값= ", Object.keys(scode));
    const itemKeys = Object.keys(scode); // Object객체의 Key값 가져오기

    let tm = itemKeys.map(item=><div key={item} className='w-full flex flex-col items-center text-sm border-y-2 border-y-gray-500'>
                                  <div className='w-full h-20 lg:h-10  border-b-2 border-b-gray-200 border-r-1 border-r-gray-200  text-gray-700 flex justify-center items-center'>
                                    <div>{scode[item]["name"]}</div>
                                    <div>({item})</div>
                                  </div>
                                  <div className='w-full h-10 lg:h-15 border-0 border-r-1 border-r-gray-200 flex justify-center items-center'>
                                  {tdata[0][item]}
                                  {tdata[0][item] != '-' ? scode[item]["unit"] : ''}
                                  </div>
                                </div>)
    setTags(tm);
  },[tdata])

  //항목 가져오기
  let opt = sarea.map(item => <option key={item["코드"]} value={item['코드']}>{item['측정소']}</option>)
  //console.log(opt);

  //Click이벤트
  const handleChange = ()=>{
    fetchData(refSel.current.value);
    console.log('sel=', refSel.current.value);
  }

  return (
    <>
      <div className='flex justify-between'>
        <h1 className="font-extrabold text-left">측정소 선택</h1>
        <TailSelect id = 'sel1'
                    refSel={refSel}
                    ops  = {opt}
                    handleChange = {handleChange} />
      </div>
      <div className='mx-3 grid grid-cols-3 md:grid-cols-5 gap-y-1.5'>
        {tags}
      </div>
    </>
  )
}
