import { combineReducers } from "redux"

import filtersReducer from "../components/Filters/filtersSlice"
import todoListReducer from "../components/TodoList/todoListSlice"

export const rootReducer = combineReducers({
  todoList: todoListReducer,
  filters: filtersReducer
})
