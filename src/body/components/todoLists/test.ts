import {Task} from "./components/todoList/TodoList.tsx";
import {v4 as uuisv4} from "uuid";

export const test=()=> {

    const tasks = [
        {id: uuisv4(), task: "HTML", isDone: true, todolistId:"list1"},
        {id: uuisv4(), task: "Css", isDone: true, todolistId: "list1"},
        {id: uuisv4(), task: "React", isDone: false, todolistId:"list1"},
        {id: uuisv4(), task: "Redux", isDone: false, todolistId:"list1"},

        {id: uuisv4(), task: "ReduxToolKit", isDone: false, todolistId:"list2"},

        {id: uuisv4(), task: "Axios", isDone: false, todolistId:"list3"},
        {id: uuisv4(), task: "AntD", isDone: false, todolistId:"list3"},
    ]
    const taskObj={
       // "list1":[{id: uuisv4(), task: "HTML", isDone: true, todolistId:"list1"}],
    }

    tasks.forEach((task)=>{
        if(task.todolistId in taskObj){
            console.log("есть такой есть")
            //если такой клюь есть

            taskObj[task.todolistId]=[...taskObj[task.todolistId], task]
        }
        else{
            taskObj[task.todolistId]=[task]
        }
    })

    console.log(taskObj["list1"])





    const todolists = [
        {
            id: "list1", title: "Лист 1"
        },
        {
            id: "list2", title: "Лист 2"
        },
        {
            id: "list3", title: "Лист 3"
        },
    ]


}