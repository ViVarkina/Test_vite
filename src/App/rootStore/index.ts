import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '@/entits';
import { useDispatch } from 'react-redux';
import { todolistSlice } from '@/entits/todolist';
import { taskSlice } from '@/entits/task';

export const rootStore = configureStore({
  reducer: {
    userStore: userSlice.reducer,
    todolistStore: todolistSlice.reducer,
    taskStore: taskSlice.reducer,
  },
});

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
