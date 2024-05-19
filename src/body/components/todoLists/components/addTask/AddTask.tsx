import css from "../todoList/TodoList.module.css";
import {useState} from "react";
import {v4 as uuisv4} from "uuid";
import {Task} from "../todoList/TodoList.tsx";

interface Prors{
    tasks:Task[]
    setTasks:(tasks:Task[])=>void
}

export const AddTask=({tasks, setTasks}:Prors)=> {
    const[value,setvalue]=useState<string>("")
    const [error, setError]=useState<boolean>()
    const addTask = ()=>{
        if (value){
            const newArrTasks =[...tasks]
            newArrTasks.unshift({id:uuisv4(), task:value, isDone:false})
            setTasks(newArrTasks)
            setvalue("")
        } else{
            setError(true)
        }
    }
    return <div>
        <input className={error ? css.error : undefined} type={"text"} value={value} onChange={(e) => {
            if (error) {
                setError(false)
            }
            setvalue(e.currentTarget.value)
            console.log(e.currentTarget.value)
        }}/>
        <button onClick={addTask}>Add task</button>
    </div>
}