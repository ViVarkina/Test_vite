import { apiInstance } from '@/shared';
import { TodolistDTO, TodolistRespons } from '@/entits/todolist';
import { errorHandler } from '@/shared';
import { createAsyncThunk } from '@reduxjs/toolkit';

const normalizedTodolist = (todolist: TodolistRespons[]): TodolistDTO[] => {
  return todolist.map((tdl) => {
    const { user_id, created_at, ...rest } = tdl;
    const newDTO = { ...rest, userId: user_id, createdAt: created_at };
    return newDTO;
  });
};
export const getMyTodoLists = createAsyncThunk<TodolistDTO[], void>(
  'pageTodolist/getMyTodoLists',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiInstance.get<TodolistRespons[]>('/todolist');
      return normalizedTodolist(response.data);
    } catch (error) {
      return rejectWithValue(errorHandler(error));
    }
  }
);
