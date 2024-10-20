import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiInstance } from '@/shared';
import { SigInResponse } from '@/entits/user/type';
import { errorHandler, setAuthHeader } from '@/shared';

export const autMe = createAsyncThunk<SigInResponse, void>(
  'users/autMe',
  async (_, { rejectWithValue }) => {
    try {
      setAuthHeader();
      const response = await apiInstance.get<SigInResponse>('/users/me');
      return response.data;
    } catch (error) {
      return rejectWithValue(errorHandler(error));
    }
  }
);
