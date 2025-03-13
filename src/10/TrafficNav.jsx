import TailButton from '../UI/TailButton'
import { useEffect } from 'react';

//props에 함수가 넘어갈수있다!(세터..)
export default function TrafficNav({title, ct, selC, setselC}) {


    //대분류 배열, 버튼 적용
    const bts = ct.map(bt => <TailButton key={bt} 
                                        caption={bt} 
                                        color={selC==bt? "blue" : "lime"}
                                        onClick={()=> setselC(bt) }/>);//누른 값이 set됨
   

  return (
    <div className='w-full flex justify-between items-center'>
        <div className='font-bold text-left
                        flex-grow-0'>
            교통사고{title}
        </div>
        <div className='flex-grow-0'>
        {bts}
        </div>
    </div>
  )
}
