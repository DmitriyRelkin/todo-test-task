import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ITodo } from "../../store/slices/todoSlice";
import { getTodoItemStyles } from "./styles";

interface ITodoListItemProps {
  todo: ITodo;
  onDeleteTodo: (id: number) => void;
  onSelect: (id: number) => void;
  isSelected: boolean;
}

const TodoListItem: React.FC<ITodoListItemProps> = ({ todo, onSelect, onDeleteTodo, isSelected }) => {
  const { container, title, deleteButton, deleteButtonText, selectedItemStyle } = getTodoItemStyles();

  const handleDeleteTodo = () => {
    onDeleteTodo(todo.id);
  };

  const onPress = () => {
    onSelect(todo.id);
  }

  return (
    <TouchableOpacity testID="todo-item" onPress={onPress} style={[container, isSelected && selectedItemStyle]}>
      <Text style={title}>{todo.text}</Text>
      <TouchableOpacity testID="delete-button" style={deleteButton} onPress={handleDeleteTodo}>
        <Text style={deleteButtonText}>DELETE</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default TodoListItem;
