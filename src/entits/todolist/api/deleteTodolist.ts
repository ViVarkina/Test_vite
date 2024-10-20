import { createAsyncThunk } from '@reduxjs/toolkit';
import { DeleteTodolistParams, getMyTodolist } from '@/entits';
import { apiInstance } from '@/shared';
import { errorHandler } from '@/shared';

interface CommonFuncti {
  successCallback: () => void;
}

export const deleteTodolist = createAsyncThunk<void, DeleteTodolistParams & CommonFuncti>(
  'todolist/deleteTodolist',
  async ({ todolistId, successCallback }, { rejectWithValue, dispatch }) => {
    try {
      await apiInstance.delete(`todolist/${todolistId}`);
      successCallback();
      dispatch(getMyTodolist());
    } catch (error) {
      return rejectWithValue(errorHandler(error));
    }
  }
);
