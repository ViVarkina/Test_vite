import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiInstance } from '@/shared';
import { TodolistDTO, TodolistRequest, TodolistRespons } from '@/entits';
import { errorHandler } from '@/shared';

const normalizeData = (data: TodolistRespons): TodolistDTO => {
  const { created_at, user_id, ...rest } = data;
  return { createdAt: created_at, userId: user_id, ...rest };
};

interface CommonFuncti {
  successCallback: () => void;
}

export const addTodolist = createAsyncThunk<TodolistDTO, TodolistRequest & CommonFuncti>(
  'todolist/addTodolist',
  async ({ successCallback, ...data }, twinkAPI) => {
    try {
      const response = await apiInstance.post<TodolistRespons>('todolist', data);
      successCallback?.();
      return normalizeData(response.data);
    } catch (error) {
      return twinkAPI.rejectWithValue(errorHandler(error));
    }
  }
);
