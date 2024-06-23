import css from "../todoList/TodoList.module.css";
import {Dispatch, SetStateAction, useState} from "react";
import {v4 as uuisv4} from "uuid";
import {Task} from "../todoList/TodoList.tsx";
import {TaskType} from "../../TodoLists.tsx";
import {BaseButton} from "../../../../../shared";

interface ProrsType {
    setTasks: Dispatch<SetStateAction<TaskType>>
    todolistId: string
}

export const AddTask = ({setTasks, todolistId}: ProrsType) => {
    const [value, setValue] = useState<string>("")
    const [error, setError] = useState<boolean>()
    const addTask = () => {
        if (value) {
            setTasks(prevState => {
                const newTask: Task = {id: uuisv4(), task: value, isDone: false, todolistId}
                console.log(newTask)
                const tasks = prevState[todolistId]
                const newTasks = [newTask, ...tasks]
                return {...prevState, ...{[todolistId]: newTasks}}
            })
            setValue("")
        } else {
            setError(true)
        }
    }
    return <div>
        <input className={error ? css.error : undefined} type={"text"} value={value} onChange={(e) => {
            if (error) {
                setError(false)
            }
            setValue(e.currentTarget.value)
            console.log(e.currentTarget.value)
        }}/>
        <BaseButton onClick={addTask}>Add task</BaseButton>
    </div>
}