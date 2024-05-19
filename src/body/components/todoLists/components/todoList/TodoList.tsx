import {FilterStateType} from "../../TodoLists.tsx";
// import {v4 as uuisv4} from "uuid";
// import {ChangeEvent, useState} from "react";
// import css from "./TodoList.module.css"
import {FilterBlock} from "../fiterBlock/FilterBlock.tsx";
import {TasksList} from "../tasksList/TasksList.tsx";
import {AddTask} from "../addTask/AddTask.tsx";
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


export const TodoList=({title,tasks, setFilterState,filterState,setTasks}:Props)=>{
    return <>
        <div>{title}</div>
        <AddTask tasks={tasks} setTasks={setTasks}/>
        <TasksList tasks={tasks} setTasks={setTasks}/>
    <FilterBlock setFilterState={setFilterState} filterState={filterState}/>
    </>
}