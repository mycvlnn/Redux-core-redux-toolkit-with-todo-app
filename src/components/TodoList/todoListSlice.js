import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const addNewTodo = createAsyncThunk('todos/addNewTodo', async (newTodo) => {
  const res = await fetch('/api/todos', {
    method: 'POST',
    body: JSON.stringify(newTodo)
  })
  const data = await res.json()
  return data.todos
})

export const updateTodo = createAsyncThunk('todos/updateTodo', async (updatedTodo) => {
  const res = await fetch('/api/updateTodo', {
    method: 'POST',
    body: JSON.stringify(updatedTodo)
  })

  const data = await res.json()
  return data.todos
})

/*
  => todos/fetchTodos/pending
  => todos/fetchTodos/fullfilled
  => todos/fetchTodos/rejected
*/

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const res = await fetch('/api/todos')
  const data = await res.json()
  return data.todos
})

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: { status: 'idle', todos: [] },
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        console.log({ action })
        state.todos = action.payload
        state.status = 'idle'
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload)
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const currentTodo = state.todos.find((todo) => todo.id === action.payload.id)
        if (currentTodo) currentTodo.completed = !currentTodo.completed
      })
  }
})

export const { addTodo, toggleStatusTodo } = todoListSlice.actions

export default todoListSlice.reducer
