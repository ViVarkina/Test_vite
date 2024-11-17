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
  todolistId: string;
}

export const changeTodolist = createAsyncThunk<TodolistDTO, Partial<TodolistRequest> & CommonFuncti
>('pageTodolist/changeTodolist', async ({ successCallback, todolistId, ...data }, twinkAPI) => {
  try {
    const response = await apiInstance.patch<TodolistRespons>(`todolist/${todolistId}`, data);
    successCallback?.();
    return normalizeData(response.data);
  } catch (error) {
    return twinkAPI.rejectWithValue(errorHandler(error));
  }
});
