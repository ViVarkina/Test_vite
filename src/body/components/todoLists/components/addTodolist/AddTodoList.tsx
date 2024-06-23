import {Dispatch, SetStateAction, useState} from "react";
import {v4 as uuisv4} from "uuid";
import {TaskType, TodoListsType} from "../../TodoLists.tsx";


interface PropsType {
    setTodoLists: Dispatch<SetStateAction<TodoListsType[]>>
    setTasks:Dispatch<SetStateAction<TaskType>>

}
export const AddTodoList=({setTodoLists,setTasks}:PropsType)=>{
    const [value, setValue] = useState<string>("")

    const onClickAddTodolist = ()=>{
        const todoListId= uuisv4()
        const newTodoList: TodoListsType={
            id:todoListId, title:value
        }
        const newTask = {
            [todoListId]: []
        }
        setTodoLists(prevState => [newTodoList, ...prevState])
        setTasks(prevState => {
            return {...prevState, ...newTask}
        })
        setValue("")
    }

    return <>
        <div>
            <input placeholder={"Add new todo"} onChange={(event) => {
                setValue(event.target.value)
            }}
                   value={value}/>
            <button onClick={onClickAddTodolist}>+</button>
        </div>
    </>
}