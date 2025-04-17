import { useState, useEffect, useRef } from "react";
import TailButton from "../UI/TailButton"

export default function MyRef() {
    //ref 변수 선언
    const refInput1 = useRef();
    const refInput2 = useRef();
    const refResult = useRef();
    const refSelect = useRef();

  //계산
  const handleCal = (e)=>{
    e.preventDefault();

    //입력 공백 체크
    if(refInput1.current.value ==''){//current #ref사용시 반드시 사용해야함
        alert('첫번째 값을 입력하세요.');
        refInput1.current.focus(); //focus #커서 올렸을때
        return;
    }

    //입력 공백 체크
    if(refInput2.current.value ==''){
        alert('두번째 값을 입력하세요.');
        refInput2.current.focus();
        return;
    }

    let num1 = parseInt(refInput1.current.value);
    let num2 = parseInt(refInput2.current.value);

    switch(refSelect.current.value){
        case "+":
            refResult.current.value = num1 + num2 ;
            break;
        case "-":
            refResult.current.value = num1 - num2 ;
            break;
        case "*":
            refResult.current.value = num1 * num2 ;
            break;
        case "/":
            refResult.current.value = num1 / num2 ;
            break;
    }

    //입력 초기화
    const handleInit = ()=>{
        refInput1.current.value='';
        refInput2.current.value='';
        refSelect.current.value='+';
        refResult.current.value='';
    }

    //컴포넌트 생성시 입력 상자에 포커스
    useEffect(()=>{
        refInput1.current.focus();
    },[])

  }
  return (
    <div className="w-full flex justify-center items-start mt-10">
        <div className="w-10/12 flex justify-center items-center bg-lime-100 p-5">
            <form className="w-3/5 grid grid-cols-5 gap-4">
                <input type="number" id="txt1"  ref={refInput1}  // onClick={handleInit}
                    className="w-full px-3 py-2 border border-stone-600 bg-stone-50 rounded-md
                               block text-stone-900 text-center
                             focus:ring-blue-500 focus:border-blue-500"/>
                              {/* focus했을 때 ring #윤곽선강조  */}
                <select id="sel" ref={refSelect}
                        className="w-full px-3 py-2 border border-stone-300  bg-stone-50
                                    block text-stone-900 rounded-md text-center">
                    <option value="+" defaultValue>+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <input type="number" id="txt2" ref={refInput2}
                    className="w-full px-3 py-2 border border-stone-600 bg-stone-50 rounded-md
                               block text-stone-900 text-center
                               focus:ring-blue-500 focus:border-blue-500"/>
                <TailButton caption="=" color="blue" onClick={handleCal}/>
                <input type="number" id="txt2" readOnly ref={refResult}
                        className="bg-stone-100 border border-stone-300
                                    text-stone-900 rounded-md text-center
                                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2"/>
            </form>
        </div>
    </div>
  )
}
