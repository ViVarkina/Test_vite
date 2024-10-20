import { createAsyncThunk } from '@reduxjs/toolkit';
import { ACCESS_TOKEN, apiInstance } from '@/shared';
import { SigInRequest, SigInResponse } from '@/entits/user/type';
import { autMe } from './autMe.ts';
import { errorHandler } from '@/shared/api/axiosinstance.ts';

export const sigIn = createAsyncThunk<SigInResponse, SigInRequest, {}>(
  'users/sigIn',
  async (params, { dispatch, rejectWithValue }) => {
    try {
      const response = await apiInstance.post<SigInResponse>('/users/login', params);
      localStorage.setItem(ACCESS_TOKEN, response.data.access_token);
      dispatch(autMe());
      return response.data;
    } catch (error) {
      return rejectWithValue(errorHandler(error));
    }
  }
);
