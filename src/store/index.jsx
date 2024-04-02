import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/auth'
import ingredientsSlice from './slice/ingredients'
import postSlice from './slice/post'

export default configureStore({
  reducer: {
    auth: authSlice,
    ingredients: ingredientsSlice,
    post: postSlice
  }
})