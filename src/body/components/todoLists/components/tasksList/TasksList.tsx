import css from "../todoList/TodoList.module.css";
import {Task} from "../todoList/TodoList.tsx";
import {ChangeEvent} from "react";
import {TaskObjType} from "../../TodoLists.tsx";

interface Props{
    tasks:Task[]
    filterTask: Task[]
    setTasks:(tasks:TaskObjType)=>void
}

export const TasksList=({tasks, setTasks, filterTask}:Props)=> {
    const onDeleteTask=(id: string)=>{
        const newArr = [...tasks]
        const deleteTask = newArr.find(task => task.id == id)
        console.log(deleteTask, newArr)
        if (deleteTask) {
            console.log("123")
            setTasks((prevState) => {
                const tagretTtodolist = prevState[deleteTask.todolistId]
                console.log(tagretTtodolist)

                const filterTask = tagretTtodolist.filter((el) => el.id !== id)
                console.log(filterTask)

                console.log({...prevState, ...{[deleteTask.todolistId]: filterTask}})
                return {...prevState, ...{[deleteTask.todolistId]: filterTask}}

            })
        }}
    const onChangeCheckBox =(el:ChangeEvent<HTMLInputElement>, id:string)=>{
        const newArr = [...tasks]
        const changeTask = newArr.find(task=>task.id == id)
        if (changeTask){
            changeTask.isDone = el.target.checked
            const newTasks = newArr.map(task=> task.id ==id ? changeTask:task)
            // setTasks()
        }
    }
    return <ul className={css.tasks}>
        {filterTask.map((task) => (
            <li key={task.id} className={task.isDone ? css.isDone : undefined}>
                <input type={"checkbox"} checked={task.isDone}
                       onChange={event => onChangeCheckBox(event, task.id)}/>{task.task}
                <button>изменить</button>
                <button onClick={() => onDeleteTask(task.id)}>удалить</button>
            </li>

        ))}
    </ul>
}