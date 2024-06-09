import {Task, TodoList} from "./components/todoList/TodoList.tsx";
import {v4 as uuisv4} from "uuid";
import {useState} from "react";


interface TodoListsType {
    id:string
    title:string
}

const todolistId1=uuisv4()
const todolistId2=uuisv4()

const initialTodolists: TodoListsType[] = [
    {id:todolistId1, title:"лист1"},
    {id:todolistId2, title:"лист2"},
]

export interface TaskObjType{
    [key:string]:Task[]
}
 const initialTasks:TaskObjType={
    [todolistId1]:[
        {id:uuisv4(), task:"HTML",isDone:true,  todolistId:todolistId1},
        {id:uuisv4(), task:"Css",isDone:true,  todolistId:todolistId1},
        {id:uuisv4(), task:"React",isDone:false,  todolistId:todolistId1},
    ],
    [todolistId2]:[
        {id:uuisv4(), task:"Redux",isDone:false, todolistId:todolistId2},
        {id:uuisv4(), task:"ReduxToolKit",isDone:false,  todolistId:todolistId2},
        {id:uuisv4(), task:"Axios",isDone:false,  todolistId:todolistId2},
        {id:uuisv4(), task:"AntD",isDone:false,  todolistId:todolistId2},
    ]
}




export const TodoLists=()=> {
    const [todoLists, setTodolists] = useState<TodoListsType[]>(initialTodolists)
    const [tasks, setTasks]=useState<TaskObjType>(initialTasks)
    // const [tasks, setTasks]= useState<Task[]>(initialTasks)

    return <>
        {todoLists.map((todolist)=>{
            return(
                <TodoList
                    key={todolist.id}
                    title={todolist.title}
                    tasks={tasks[todolist.id]}
                    setTasks={setTasks}
                />
            )
        })}

    </>
}