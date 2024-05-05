import {FilterStateType} from "../../TodoLists.tsx";

interface Props{
    title: string
    tasks:Task[]
    setFilterState:(filterState:FilterStateType)=>void
    filterState: FilterStateType
}
export interface Task{
    id: number
    task: string
    isDone: boolean
}

const setColor=(filterState:FilterStateType, state:FilterStateType)=>{
    return {background:filterState === state?"lightblue":""}
}
export const TodoList=({title,tasks, setFilterState,filterState}:Props)=>{
    return <>
        <div>{title}</div>
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