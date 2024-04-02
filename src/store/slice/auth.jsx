import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user:{
    name: '',
    email: '',
    isActive: false
  }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUserData } = authSlice.actions

export default authSlice.reducer