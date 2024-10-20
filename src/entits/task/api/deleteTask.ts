import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiInstance } from '@/shared';
import { getMyTask, TaskResponse } from '@/entits';

interface DeleteTaskReqest{
  id:string
}

export const deleteTask = createAsyncThunk<void,DeleteTaskReqest>("task/deleteTask", async (params,{rejectWithValue,dispatch})=>{
  try {
    const {id} = params
    await apiInstance.delete<TaskResponse>(`/task/${id}`)
    dispatch(getMyTask())
  }
  catch (error){
    return rejectWithValue(error)
  }

})