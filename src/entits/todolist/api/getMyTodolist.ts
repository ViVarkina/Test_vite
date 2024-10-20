import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiInstance } from '@/shared';
import { TodolistDTO, TodolistRespons } from '@/entits/todolist';
import { errorHandler } from '@/shared';

const normalizedTodolist = (todolist: TodolistRespons[]): TodolistDTO[] => {
  return todolist.map((tdl) => {
    const { user_id, created_at, ...rest } = tdl;
    const newDTO = { ...rest, userId: user_id, createdAt: created_at };
    return newDTO;
  });
};
export const getMyTodolist = createAsyncThunk<TodolistDTO[], void>(
  'todolist/getMyTodolist',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiInstance.get<TodolistRespons[]>('/todolist');
      return normalizedTodolist(response.data);
    } catch (error) {
      return rejectWithValue(errorHandler(error));
    }
  }
);
