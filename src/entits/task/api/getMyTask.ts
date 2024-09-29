import { createAsyncThunk } from '@reduxjs/toolkit';

import { TaskResponse, TaskTDO } from '@/entits/task/type';
import { apiInstance } from '@/shared';

const normalizedTask = (task: TaskResponse[]): TaskTDO[] => {
  return task.map((task) => {
    const { is_completed, created_at, todolist_id, due_date, ...rest } = task;
    const newTask = {
      ...rest,
      isCompleted: is_completed,
      createdAt: created_at,
      todolistId: todolist_id,
      dueDate: due_date,
    };
    return newTask;
  });
};

export const getMyTask = createAsyncThunk<TaskTDO[], void>('task/getMyTask', async () => {
  const response = await apiInstance.get<TaskResponse[]>('/task');
  return normalizedTask(response.data);
});
