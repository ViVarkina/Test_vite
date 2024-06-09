import {FilterBlock} from "../fiterBlock/FilterBlock.tsx";
import {TasksList} from "../tasksList/TasksList.tsx";
import {AddTask} from "../addTask/AddTask.tsx";
import {useState} from "react";
import {TaskObjType} from "../../TodoLists.tsx";

interface PropsType{
    title: string
    tasks:Task[]
    setTasks:(tasks:TaskObjType[])=>void
}
export interface Task{
    id: string
    task: string
    isDone: boolean
    todolistId: string
}


export const TodoList=({title,tasks,setTasks}:PropsType)=>{
    type FilterStateType="All"|"Active"|"Closed"

    const [filterState, setFilterState]= useState<FilterStateType>("All")
    console.log(tasks)
    let filterTask: Task[] = []

    if(filterState === "All"){
        filterTask= tasks
    } else if(filterState === "Active"){
        filterTask=tasks.filter(task => !task.isDone)
    }else if(filterState === "Closed"){
        filterTask=tasks.filter(task => task.isDone)
    }
    console.log(filterTask)
    return <>
        <div>{title}</div>
        <AddTask tasks={filterTask} setTasks={setTasks}/>
        <TasksList tasks={tasks} setTasks={setTasks} filterTask={filterTask}/>
    <FilterBlock setFilterState={setFilterState} filterState={filterState}/>
    </>
}