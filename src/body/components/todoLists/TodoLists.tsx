import {TodoList} from "./components";
import {Task} from "./components/todoList/TodoList.tsx";
import {useState} from "react";
import {v4 as uuisv4} from "uuid";

const initialTasks:Task[] = [
    {id:uuisv4(), task:"HTML",isDone:true},
    {id:uuisv4(), task:"Css",isDone:true},
    {id:uuisv4(), task:"React",isDone:false},
    {id:uuisv4(), task:"Redux",isDone:false},
    {id:uuisv4(), task:"ReduxToolKit",isDone:false},
    {id:uuisv4(), task:"Axios",isDone:false},
    {id:uuisv4(), task:"AntD",isDone:false},
]

export type FilterStateType="All"|"Active"|"Closed"
export const TodoLists=()=>{
    const [tasks, setTasks]= useState<Task[]>(initialTasks)
    const [filterState, setFilterState]= useState<FilterStateType>("All")
    let filterTask: Task[] = []
    if(filterState === "All"){
        filterTask= tasks
    } else if(filterState === "Active"){
        filterTask=tasks.filter(task => !task.isDone)
    }else if(filterState === "Closed"){
        filterTask=tasks.filter(task => task.isDone)
    }
    return <>
        <TodoList title={"Что учить"} tasks={filterTask} setFilterState={setFilterState} filterState={filterState} setTasks={setTasks}/>
    </>
}