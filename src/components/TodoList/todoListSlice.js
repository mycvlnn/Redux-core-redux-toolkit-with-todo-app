import { createSlice } from "@reduxjs/toolkit"

const todoListSlice = createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "Reactjs", completed: false, priority: "Medium" },
    { id: 2, name: "JavaScript", completed: true, priority: "High" },
    { id: 3, name: "HTML, Css", completed: true, priority: "Low" }
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    toggleStatusTodo: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload)
      if (currentTodo) currentTodo.completed = !currentTodo.completed
    }
  }
})

export const { addTodo, toggleStatusTodo } = todoListSlice.actions

export default todoListSlice.reducer
