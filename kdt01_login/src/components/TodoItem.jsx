import { RiDeleteBin6Line } from "react-icons/ri";

export default function TodoItem({ id, text, completed, putData, delData}) {

  //onClick에서 바로 delData, putData쓰면 됨
    // const handleOx = () =>{
    //     putData(id);
    // }

    // const handleDel = () =>{
    //     delData(id);
    //   }

  return (
    <div className="w-9/10 mx-auto flex p-3 bg-white border-0 border-b-2 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
           <div className="w-10">
           {completed == 'O' ?  
            <input type="checkbox" id={id} name='todo' value={text}  onClick={()=>putData(id, completed)} checked/> 
            :<input type="checkbox" id={id} name='todo' value={text} onClick={()=>putData(id, completed)}/> }  
            </div>
            <label htmlFor={id} className="flex-grow flex justify-between">
              <span className={completed == 'O' ? "text-gray-400 line-through" : "" }>{text}</span>  
              <span className={`px-5 pr-2 border-0 border-l-1 border-l-gray-200 ${completed == 'O' ? 'text-blue-400': 'text-red-400'}`}>{completed}</span>
              <button onClick={()=>delData(id)} className="px-5 pr-2 border-0 border-l-1 border-l-gray-200 text-gray-400 cursor-pointer" ><RiDeleteBin6Line /></button>
            </label>
    </div>
  )
}
