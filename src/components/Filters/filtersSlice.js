import { createSlice } from "@reduxjs/toolkit"

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priorities: []
  },
  reducers: {
    searchTodo: (state, action) => {
      state.search = action.payload
    },
    changeStatusTodo: (state, action) => {
      state.status = action.payload
    },
    changePrioritiesTodo: (state, action) => {
      state.priorities = action.payload
    }
  }
})

export const { searchTodo, changePrioritiesTodo, changeStatusTodo } = filtersSlice.actions

export default filtersSlice.reducer
