import { createSlice } from '@reduxjs/toolkit';
import { sigIn, autMe } from '@/entits';
import { ACCESS_TOKEN, setAuthHeader } from '@/shared';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Ivan',
    isAuthenticated: false,
    isLoading: false,
    isInitialized: false,
  },
  reducers: {
    logOut(state) {
      localStorage.removeItem(ACCESS_TOKEN);
      setAuthHeader()
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sigIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(autMe.fulfilled, (state) => {
        state.isAuthenticated = true;
        state.isLoading = false;
        state.isInitialized = true;
      })
      .addCase(autMe.rejected, (state) => {
        state.isLoading = false;
        state.isInitialized = true;
      })
      .addCase(sigIn.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action);
      });
  },
});

export { userSlice };
export const { logOut } = userSlice.actions;
