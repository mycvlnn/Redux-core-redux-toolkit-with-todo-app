import { configureStore } from "@reduxjs/toolkit"

import filtersReducer from "../components/Filters/filtersSlice"
import todoListReducer from "../components/TodoList/todoListSlice"

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    todoList: todoListReducer
  }
})

export default store
