import { createSlice } from '@reduxjs/toolkit';
import { addTodolist, getMyTodoList, getMyTodoLists, TodolistDTO } from '@/entits';
import { changeTodolist } from '@/entits/todolist/api/changeTodolist.ts';
import { unionBy } from 'lodash';

interface InitialStateType {
  todoLists: TodolistDTO[];
  todoList: TodolistDTO | undefined;
  isLoading: boolean;
}

const initialState: InitialStateType = {
  todoLists: [],
  todoList:undefined,
  isLoading: false,
};
export const todolistSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    clearTodolist:(state)=>{
      state.todoList = undefined
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMyTodoLists.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMyTodoLists.fulfilled, (state, action) => {
        state.todoLists = action.payload.sort((a, b) => {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
        state.isLoading = false;
      })
      .addCase(getMyTodoLists.rejected, (state) => {
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
        if(state.todoList){
          state.todoList = action.payload
        }
        else{
          state.todoLists = unionBy([action.payload, ...state.todoLists], 'id');
        }
        state.isLoading = false;
      })
      .addCase(changeTodolist.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getMyTodoList.fulfilled, (state, action)=>{
        state.todoList = action.payload
      })
  },
});

export const { clearTodolist} = todolistSlice.actions