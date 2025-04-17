import TailButton from "../ui/TailButton";
import TodoItem from "./TodoItem";

import { useRef } from "react";

import { CiCircleCheck } from "react-icons/ci";
export default function TodoForm({addData }) {
    //ref 변수
    const todoRef = useRef();
    const selRef = useRef();
   
    //클릭했을 때
    const handleClick=()=>{
        if(todoRef.current.value == ''){
            alert("할일을 입력하세요");
            todoRef.current.focus();
            return;
        }

        //data 추가
        addData(todoRef.current.value, selRef.current.value);
    }

    const handleCancel = () =>{
        todoRef.current.value = '';
    }

  return (
    <>
        <div className="w-full py-8 mb-3 border rounded-2xl border-blue-100
                        flex flex-row justify-center 
                        bg-blue-50 bg-opacity-70 shadow">
        <div className="w-7/10 h-13 mr-4 border-1 border-blue-200 rounded-lg shadow-xs bg-white
                        flex">
            <select ref={selRef} className="block py-2.5 px-3 w-25 border-0 border-r-2 border-blue-200 focus:bg-yellow-50 peer rounded-l-lg
                        text-sm text-gray-500 
                        focus:outline-none focus:ring-0 ">
                <option value='O'> O</option>
                <option value='X' defaultValue> X</option>
            </select>
            <input type="text" ref={todoRef} placeholder="todo____✏" className="w-full h-full pl-4 focus:outline-blue-300 rounded-r-lg"/>
        </div>
        <TailButton caption="확인" color="blue" onClick={handleClick}/>
        <TailButton caption="취소" color="lgray" onClick={handleCancel}/>
        </div>
        
    </>
  )
}
