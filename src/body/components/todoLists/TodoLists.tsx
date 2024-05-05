import {TodoList} from "./components";
import {Task} from "./components/todoList/TodoList.tsx";
import {useState} from "react";

const tasks:Task[] = [
    {id:1, task:"HTML",isDone:true},
    {id:2, task:"Css",isDone:true},
    {id:3, task:"React",isDone:false},
    {id:4, task:"Redux",isDone:false},
    {id:5, task:"ReduxToolKit",isDone:false},
    {id:6, task:"Axios",isDone:false},
    {id:7, task:"AntD",isDone:false},
]

export type FilterStateType="All"|"Active"|"Closed"
export const TodoLists=()=>{
    const [filterState, setFilterState]= useState<FilterStateType>("Closed")

    let filterTask: Task[] = []
    if(filterState === "All"){
        filterTask= tasks
    } else if(filterState === "Active"){
        filterTask=tasks.filter(task => !task.isDone)
    }else if(filterState === "Closed"){
        filterTask=tasks.filter(task => task.isDone)
    }




    return <>
        <TodoList title={"Что учить"} tasks={filterTask} setFilterState={setFilterState} filterState={filterState}/>
    </>
}