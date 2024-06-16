import {FilterBlock} from "../fiterBlock/FilterBlock.tsx";
import {TasksList} from "../tasksList/TasksList.tsx";
import {AddTask} from "../addTask/AddTask.tsx";
import {Dispatch, SetStateAction, useState} from "react";
import {TaskType, TodoListsType} from "../../TodoLists.tsx";
import {ChangeTitle} from "../changeTitile/ChangeTitle.tsx";

interface PropsType {
    title: string
    tasks: Task[]
    setTasks: Dispatch<SetStateAction<TaskType>>
    todolistId: string
    setTodolists: Dispatch<SetStateAction<TodoListsType[]>>
}

export interface Task {
    id: string
    task: string
    isDone: boolean
    todolistId: string

}

export type FilterStateType = "All" | "Active" | "Closed"
export const TodoList = ({title, tasks, setTasks, todolistId, setTodolists}: PropsType) => {


    const [filterState, setFilterState] = useState<FilterStateType>("All")
    let filterTask: Task[] = []

    if (filterState === "All") {
        filterTask = tasks
    } else if (filterState === "Active") {
        filterTask = tasks.filter(task => !task.isDone)
    } else if (filterState === "Closed") {
        filterTask = tasks.filter(task => task.isDone)
    }


    return <>
        <ChangeTitle title={title} todolistId={todolistId} setTodolists={setTodolists}/>
        <AddTask setTasks={setTasks} todolistId={todolistId}/>
        <TasksList setTasks={setTasks} filterTask={filterTask} todolistId={todolistId}/>
        <FilterBlock setFilterState={setFilterState} filterState={filterState}/>
    </>
}