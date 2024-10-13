import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiInstance } from '@/shared';
import { TaskResponse, TaskTDO, TaskUpdateRequest } from '@/entits';

interface CommonData{
  taskId:string
  successCallback?:()=>void
}
export const updateTask = createAsyncThunk<TaskTDO, TaskUpdateRequest & CommonData>(
  'task/updateTask',
  async (params) => {
    const {taskId,successCallback,...data} = params
    const {title, isCompleted: is_completed} = data
    const response = await apiInstance.patch<TaskResponse>(`/task/${taskId}`, { is_completed,title});
    const {
      is_completed: isCompleted,
      todolist_id: todolistId,
      created_at: createdAt,
      due_date: dueDate,
      ...rest
    } = response.data;
    successCallback?.()
    return {
      isCompleted,
      createdAt,
      todolistId,
      dueDate,
      ...rest,
    };
  }
);
