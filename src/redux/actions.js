export const addTodoAction = (todo) => {
  return {
    type: "todoList/addTodo",
    payload: todo
  }
}

export const toggleStatusTodoAction = (idTodo) => {
  return {
    type: "todoList/toggleTodo",
    payload: idTodo
  }
}

export const searchTodoAction = (text) => {
  return {
    type: "filters/searchTodo",
    payload: text
  }
}

export const changeStatusAction = (status) => {
  return {
    type: "filters/changeStatus",
    payload: status
  }
}

export const changePrioritiesAction = (priorities) => {
  return {
    type: "filters/changePriorities",
    payload: priorities
  }
}
