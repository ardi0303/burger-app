import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: [],
  favoritePost: []
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPost : (state, action) => {
      state.post = action.payload
    },
    setFavoritePost : (state, action) => {
      state.favoritePost = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setPost, setFavoritePost } = postSlice.actions

export default postSlice.reducer