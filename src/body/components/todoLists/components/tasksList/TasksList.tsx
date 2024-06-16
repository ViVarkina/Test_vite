import css from "../todoList/TodoList.module.css";
import {Task} from "../todoList/TodoList.tsx";
import {ChangeEvent, Dispatch, SetStateAction} from "react";
import {TaskType} from "../../TodoLists.tsx";

interface PropsType {
    filterTask: Task[]
    setTasks: Dispatch<SetStateAction<TaskType>>
    todolistId: string
}

export const TasksList = ({setTasks, filterTask, todolistId}: PropsType) => {
    const onDeleteTask = (id: string) => {

        setTasks((prevState) => {
            const targetTodolist = prevState[todolistId]

            const filterTask = targetTodolist.filter((el) => el.id !== id)
            // console.log(filterTask)

            // console.log({...prevState, ...{[todolistId]: filterTask}})
            return {...prevState, ...{[todolistId]: filterTask}}

        })
    }
    const onChangeCheckBox = (el: ChangeEvent<HTMLInputElement>, id: string) => {
        setTasks(prevState => {
            const tasks = prevState[todolistId]
            const resultTasks = tasks.map((task) => task.id === id ? {...task, isDone: el.target.checked} : task)
            const resultObj = {
                [todolistId]: resultTasks
            }

            return {...prevState, ...resultObj}
        })
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