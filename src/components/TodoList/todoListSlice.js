const initState = [
  { id: 1, name: "Reactjs", completed: false, priority: "Medium" },
  { id: 2, name: "JavaScript", completed: true, priority: "High" },
  {
    id: 3,
    name: "HTML, Css",
    completed: true,
    priority: "Low"
  }
]

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload]

    case "todoList/toggleTodo":
      return state.map((todo) => {
        if (todo.id === action.payload) return { ...todo, completed: !todo.completed }
        return todo
      })
    default:
      return state
  }
}

export default todoListReducer
