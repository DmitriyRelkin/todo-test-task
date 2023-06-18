import { RootState } from "../index";
import { createSelector } from "@reduxjs/toolkit";
import { ITodo } from "../slices/todoSlice";

export const getTodosSelector = (state: RootState): ITodo[] | undefined => state?.todoList?.todos;

export const getTodoItemByIdSelector = (todoId: number | null) =>
  createSelector(getTodosSelector, (todos: ITodo[] | undefined) => todos?.find(todoItem => todoItem.id === todoId));
