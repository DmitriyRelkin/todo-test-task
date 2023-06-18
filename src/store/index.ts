import {combineReducers, configureStore} from '@reduxjs/toolkit';
import todosReducer from './slices/todoSlice';
import authenticationSlice from './slices/authenticationSlice';

const rootReducer = combineReducers({
  todoList: todosReducer,
  authenticationStatus: authenticationSlice,
})

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
