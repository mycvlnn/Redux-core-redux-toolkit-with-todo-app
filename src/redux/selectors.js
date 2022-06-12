// Nguồn : https://github.com/reduxjs/reselect#reselect

import { createSelector } from 'reselect'

export const searchTodoSelector = (state) => state.filters.search

export const todoListSelector = (state) => state.todoList.todos

export const statusTodoSelector = (state) => state.filters.status

export const prioritiesSelector = (state) => state.filters.priorities

export const todoListRemainingSelector = createSelector(
  todoListSelector,
  searchTodoSelector,
  statusTodoSelector,
  prioritiesSelector,
  (todoList, searchTodo, status, priorities) => {
    return todoList.filter((todo) => {
      const hasNameTodo = todo.name.includes(searchTodo)
      const hasPriority = priorities.includes(todo.priority)
      const isCompleted = todo.completed

      if (status === 'All') {
        return priorities.length ? hasNameTodo && hasPriority : hasNameTodo
      }

      return (
        hasNameTodo &&
        (status === 'Completed' ? isCompleted : !isCompleted) &&
        (priorities.length ? hasPriority : true)
      )
    })
  }
)
