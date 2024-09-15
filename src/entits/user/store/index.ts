import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: "user",
  initialState:{
    name:"Ivan"
  },
  reducers:{}
})

export {userSlice}