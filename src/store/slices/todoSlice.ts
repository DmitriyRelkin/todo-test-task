import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ITodo {
  id: number;
  text: string;
}

interface ITodoState {
  todos: ITodo[];
}

const initialState: ITodoState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo(state: ITodoState, action: PayloadAction<ITodo>) {
      state.todos.push(action.payload);
    },
    updateTodo (state: ITodoState, action: PayloadAction<ITodo>) {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      const { text } = action.payload;
      if (todo) {
        todo.text = text;
      }
    },
    removeTodo (state: ITodoState, action: PayloadAction<number>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, updateTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
