
export const paths = {
  main:() =>"/",
  login:() =>"/login",
  todoLists:() => "/todo-list",
  todoList:(id:string=':todolistId')=>`/todo-list/${id}`,
  forms:()=>'/forms'
}