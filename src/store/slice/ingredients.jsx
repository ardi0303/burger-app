import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ingredients:[
    {
      id: "cheese",
      name: "Cheese",
      price: 5000,
    },
    {
      id: "lettuce",
      name: "Lettuce",
      price: 1000,
    },
    {
      id: "tomato",
      name: "Tomato",
      price: 2500,
    },
    {
      id: "pickles",
      name: "Pickles",
      price: 2000,
    },
    {
      id: "meat",
      name: "Meat",
      price: 14000,
    },
    {
      id: "mayo",
      name: "Mayo",
      price: 4000,
    },
    {
      id: "sauce",
      name: "Sauce",
      price: 4000,
    },
  ],
  selectedIngredients: [],
  ingredientCounts: {}
}

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    addIngredient: (state, action) => {
      state.selectedIngredients.push(action.payload)
    },
    removeIngredient: (state, action) => {
      state.selectedIngredients = state.selectedIngredients.filter((_, index) => index !== action.payload)
    },
    resetIngredients: (state) => {
      state.selectedIngredients = []
    }
  }
})

// Action creators are generated for each case reducer function
export const { addIngredient, removeIngredient, resetIngredients } = ingredientsSlice.actions

export default ingredientsSlice.reducer