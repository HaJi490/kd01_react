import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"

import { useEffect, useState } from "react"
import axios from "axios"

const baseUrl = "http://localhost:3005/todos"
export default function TodoList() {
    //state 변수
    const [tdata, setTdata] = useState();
    const [tags, setTags] = useState();

    //GET(select)
    const getData =async()=>{
        const resp = await axios.get(baseUrl);
        setTdata(resp.data);//resp #전체 data #항목
        //console.log("data= ",tdata); 
    }

    //POST(insert)
    const addTodo = async(text, completed) =>{
        const resp = await axios.post(baseUrl, {text: text, completed: completed});
        getData();
    }

    //DELETE //text-red-lind-600 line-through
    const handleDelete = async(id)=>{
        await axios.delete(baseUrl+`/${id}`);
        getData();
    }

    //UPDATE
    const handleToggle = async(id, completed) =>{ //매개변수 completed넣어주면 한번더 패치안해줘도됨
        //const resp = await axios.get(baseUrl+`/${id}`);
        //const todo = resp.data;
        
        const done = completed == 'O' ? 'X' : 'O'; //O면 X로
        await axios.patch(baseUrl + `/${id}`, {completed : done});
        getData();
    }

    useEffect(()=>{
        getData();
    },[])

    useEffect(()=>{
        if(tdata == null) return;

        console.log("ttttdata= ",tdata);

        if(tdata)
        
        setTags(tdata.map(item => <TodoItem key={item.id}
                                            //todo={item}하면 하나씩 안줘도 됨
                                            id={item.id}
                                            text={item['text']}
                                            completed={item['completed']}
                                            putData ={handleToggle}
                                            delData={handleDelete}/> ))
        

    },[tdata])


  return (
    <div className="w-full flex flex-col justify-center">
        <TodoForm addData={addTodo} />
        {tags}
    </div>
  )
}
