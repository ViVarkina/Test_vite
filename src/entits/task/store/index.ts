import { createSlice } from '@reduxjs/toolkit';
import { getMyTask, TaskTDO } from '@/entits/task';

export interface TaskType {
  [key: string]: TaskTDO[];
}

interface InitialStateType {
  tasks: TaskTDO[];
  isLoading: boolean;
  taskObj: TaskType;
}

const initialState: InitialStateType = {
  tasks: [],
  isLoading: false,
  taskObj: {},
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMyTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMyTask.fulfilled, (state, action) => {
        state.tasks = action.payload;

        const taskObj: TaskType = {};
        action.payload.forEach((el) => {
          if (taskObj[el.todolistId]) {
            taskObj[el.todolistId] = [...taskObj[el.todolistId], el];
          } else {
            taskObj[el.todolistId] = [el];
          }
        });
        state.taskObj = taskObj;
        state.isLoading = false;
      })
      .addCase(getMyTask.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
