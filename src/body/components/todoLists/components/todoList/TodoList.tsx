import {FilterStateType} from "../../TodoLists.tsx";
import {v4 as uuisv4} from "uuid";
import {useState} from "react";
import css from "./TodoList.module.css"
interface Props{
    title: string
    tasks:Task[]
    setFilterState:(filterState:FilterStateType)=>void
    filterState: FilterStateType
    setTasks:(tasks:Task[])=>void
}
export interface Task{
    id: string
    task: string
    isDone: boolean
}

const setColor=(filterState:FilterStateType, state:FilterStateType)=>{
    return {background:filterState === state?"lightblue":""}
}
export const TodoList=({title,tasks, setFilterState,filterState,setTasks}:Props)=>{
    const[value,setvalue]=useState<string>("")
    const [error, setError]=useState<boolean>()
        const addTask = ()=>{
            if (value){
                const newArrTasks =[...tasks]
                newArrTasks.push({id:uuisv4(), task:value, isDone:false})
                setTasks(newArrTasks)
                setvalue("")
            } else{
                setError(true)
            }
    }
    return <>
        <div>{title}</div>
        <div>
            <input className={error ? css.error :undefined} type={"text"} value={value} onChange={(e)=>{
                setvalue(e.currentTarget.value)
                console.log(e.currentTarget.value)
            }}/>
            <button onClick={addTask}>Add task</button>
        </div>
        <ul>
            {tasks.map((task)=>(
                <li key={task.id}>
                    <input type={"checkbox"} checked={task.isDone}/>{task.task}
                </li>
            ))}

        </ul>
        <div>
            <button style={setColor(filterState,"All")} onClick={()=>setFilterState("All")}>ALL</button>
            <button style={setColor(filterState,"Active")} onClick={()=>setFilterState("Active")}>Active</button>
            <button style={setColor(filterState,"Closed")} onClick={()=>setFilterState("Closed")}>Closed</button>
        </div>
    </>
}