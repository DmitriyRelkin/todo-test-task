import { RootState } from "../index";
import { createSelector } from "@reduxjs/toolkit";
import { ITodo } from "../slices/todoSlice";

// Retrun todos list
export const getTodosSelector = (state: RootState): ITodo[] | undefined => state?.todoList?.todos;

// Retrun todo item from the list by id
export const getTodoItemByIdSelector = (todoId: number | null) =>
  createSelector(getTodosSelector, (todos: ITodo[] | undefined) => todos?.find(todoItem => todoItem.id === todoId));
