import React from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { useSelector } from 'react-redux';
import { getTodoListStyles } from "./styles";
import TodoListItem from "../../components/todoListItem/TodoListItem";
import { useTodosMethods } from "../../hooks/useTodosMethods";
import { getTodosSelector } from "../../store/selectors/todosSelectors";
import { ITodo } from "../../store/slices/todoSlice";
import Delimiter from "../../components/delimiter/Delimiter";

const TodoListScreen: React.FC = () => {
  const todos = useSelector(getTodosSelector);

  const {
    container,
    title,
    subTitle,
    todoInputWrapper,
    todoInput,
    addBtnStyle,
    addBtnText,
    todoList,
  } = getTodoListStyles();

  const {
    handleDeleteTodo,
    handleUpdateTodoText,
    inputValue,
    selectedItemId,
    onSelectItem,
    buttonText,
    onPress,
  } = useTodosMethods();

  const renderListItem = ({ item }: {item: ITodo}) => (
    <TodoListItem
      isSelected={item.id === selectedItemId}
      todo={item}
      onSelect={onSelectItem}
      onDeleteTodo={handleDeleteTodo}
    />
  );

  return (
    <View style={container}>
      <Text style={title}>Todo List</Text>
      <Text style={subTitle}>Add some new plans here ;)</Text>

      <View style={todoInputWrapper}>
        <TextInput
          placeholder={'Enter here'}
          style={todoInput}
          onChangeText={handleUpdateTodoText}
          value={inputValue}
        />
        <TouchableOpacity style={addBtnStyle} onPress={onPress}>
          <Text style={addBtnText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>

      <Delimiter />

      <FlatList
        style={todoList}
        data={todos}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderListItem}
      />
    </View>
  );
};

export default TodoListScreen;
