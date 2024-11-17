import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { RootState, useAppDispatch } from '@/App/rootStore';
import { clearTodolist, getMyTask, getMyTodoList } from '@/entits';
import { TodoList } from '@/feuture/todoLists/components';
import { useSelector } from 'react-redux';
import { Button } from 'antd';

export const TodolistWrapper=()=>{
  const { todolistId  }=useParams()
  const {todoList} = useSelector((state:RootState) => state.todolistStore)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if(todolistId){
      dispatch(getMyTodoList({id:todolistId}))
      dispatch(getMyTask())
    }
    return ()=>{dispatch(clearTodolist())}
  }, []);
  if(!todolistId||!todoList){
    return null
  }

  return <>
    <Button onClick={()=>{
      navigate(-1)
    }}>Назад</Button>
    <TodoList title={todoList.title} todolistId={todolistId}/>
  </>
}