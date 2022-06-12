const initState = {
  search: "",
  status: "All",
  priorities: []
}

const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case "filters/searchTodo":
      return {
        ...state,
        search: action.payload
      }

    case "filters/changeStatus":
      return {
        ...state,
        status: action.payload
      }
    case "filters/changePriorities":
      return {
        ...state,
        priorities: action.payload
      }
    default:
      return state
  }
}

export default filtersReducer
