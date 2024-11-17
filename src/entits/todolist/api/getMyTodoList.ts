import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiInstance } from '@/shared';
import { TodolistDTO, TodolistRespons } from '@/entits/todolist';

const normalizedTodolist = (todolist: TodolistRespons): TodolistDTO => {
  const { user_id, created_at, ...rest } = todolist;
  const newDTO = { ...rest, userId: user_id, createdAt: created_at };
  return newDTO;
};

interface  getTdl{
  id:string,
}

export const getMyTodoList = createAsyncThunk<TodolistDTO, getTdl>(
  'pageTodolist/getMyTodoList',
  async ({id}) => {
    const response = await apiInstance.get<TodolistRespons>(`/todolist/${id}`);

    return normalizedTodolist(response.data);
  })
