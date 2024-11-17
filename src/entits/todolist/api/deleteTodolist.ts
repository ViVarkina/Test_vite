import { createAsyncThunk } from '@reduxjs/toolkit';
import { DeleteTodolistParams, getMyTodoLists } from '@/entits';
import { apiInstance } from '@/shared';
import { errorHandler } from '@/shared';

interface CommonFuncti {
  successCallback: () => void;
}

export const deleteTodolist = createAsyncThunk<void, DeleteTodolistParams & CommonFuncti>(
  'pageTodolist/deleteTodolist',
  async ({ todolistId, successCallback }, { rejectWithValue, dispatch }) => {
    try {
      await apiInstance.delete(`todolist/${todolistId}`);
      successCallback();
      dispatch(getMyTodoLists());
    } catch (error) {
      return rejectWithValue(errorHandler(error));
    }
  }
);
