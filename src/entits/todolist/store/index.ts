import { createSlice } from '@reduxjs/toolkit';
import { addTodolist, getMyTodolist, TodolistDTO } from '@/entits';
import { changeTodolist } from '@/entits/todolist/api/changeTodolist.ts';
import { unionBy } from 'lodash';

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
        state.todoLists = action.payload.sort((a, b) => {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
        state.isLoading = false;
      })
      .addCase(getMyTodolist.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addTodolist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTodolist.fulfilled, (state, action) => {
        state.todoLists.unshift(action.payload);
        state.isLoading = false;
      })
      .addCase(addTodolist.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(changeTodolist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changeTodolist.fulfilled, (state, action) => {
        state.todoLists = unionBy([action.payload, ...state.todoLists], 'id');
        state.isLoading = false;
      })
      .addCase(changeTodolist.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
