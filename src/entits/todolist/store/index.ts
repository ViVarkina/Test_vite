import { createSlice } from '@reduxjs/toolkit';
import { getMyTodolist, TodolistDTO } from '@/entits';

interface InitialStateType {
  todoLists: TodolistDTO[];
  isLoading: boolean;
}

const initialState: InitialStateType = {
  todoLists: [],
  isLoading: false,
};
export const todolistSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMyTodolist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMyTodolist.fulfilled, (state, action) => {
        state.todoLists = action.payload;
        state.isLoading = false;
      })
      .addCase(getMyTodolist.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
