import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiInstance } from '@/shared';
import { SigInResponse } from '@/entits/user/type';
import { setAuthHeader } from '@/shared/api/axiosinstance.ts';

export const autMe = createAsyncThunk<SigInResponse, void, {}>('users/autMe', async () => {
  setAuthHeader();
  const response = await apiInstance.get<SigInResponse>('/users/me');
  return response.data;
});
