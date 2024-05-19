import css from "../todoList/TodoList.module.css";
import {Task} from "../todoList/TodoList.tsx";
import {ChangeEvent} from "react";

interface Prors{
    tasks:Task[]
    setTasks:(tasks:Task[])=>void
}

export const TasksList=({tasks, setTasks}:Prors)=> {
    const onDeleteTask=(id: string)=>{
        const newArr = [...tasks]
        const filterTask = newArr.filter(task => task.id !== id)
        setTasks(filterTask)
    }
    const onChangeCheckBox =(el:ChangeEvent<HTMLInputElement>, id:string)=>{
        const newArr = [...tasks]
        const changeTask = newArr.find(task=>task.id == id)
        if (changeTask){
            changeTask.isDone = el.target.checked
            const newTasks = newArr.map(task=> task.id ==id ? changeTask:task)
            setTasks(newTasks)
        }
    }
    return <ul className={css.tasks}>
        {tasks.map((task) => (
            <li key={task.id} className={task.isDone ? css.isDone : undefined}>
                <input type={"checkbox"} checked={task.isDone}
                       onChange={event => onChangeCheckBox(event, task.id)}/>{task.task}
                <button>изменить</button>
                <button onClick={() => onDeleteTask(task.id)}>удалить</button>
            </li>

        ))}
    </ul>
}