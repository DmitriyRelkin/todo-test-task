import React from 'react';
import { TouchableOpacity } from 'react-native';
import renderer from 'react-test-renderer';
import TodoListItem from './TodoListItem';

describe('TodoListItem', () => {
  const todo = {
    id: 1,
    text: 'Buy groceries',
  };
  const onSelect = jest.fn();
  const onDeleteTodo = jest.fn();
  const isSelected = false;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the todo item correctly', () => {
    const tree = renderer.create(
      <TodoListItem todo={todo} onSelect={onSelect} onDeleteTodo={onDeleteTodo} isSelected={isSelected} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('calls onSelect when the item is pressed', () => {
    const component = renderer.create(
      <TodoListItem todo={todo} onSelect={onSelect} onDeleteTodo={onDeleteTodo} isSelected={isSelected} />
    );

    const touchableElement = component.root.findByType(TouchableOpacity);
    touchableElement.props.onPress();

    expect(onSelect).toHaveBeenCalledWith(1);
  });

  it('calls onSelect when the todo item is pressed', () => {
    const component = renderer.create(
      <TodoListItem todo={todo} onSelect={onSelect} onDeleteTodo={onDeleteTodo} isSelected={isSelected} />
    );

    const todoElement = component.root.findByProps({ testID: 'todo-item' });
    todoElement.props.onPress();

    expect(onSelect).toHaveBeenCalledWith(1);
  });

  it('calls onDeleteTodo when the delete button is pressed', () => {
    const component = renderer.create(
      <TodoListItem todo={todo} onSelect={onSelect} onDeleteTodo={onDeleteTodo} isSelected={isSelected} />
    );

    const deleteButtonElement = component.root.findByProps({ testID: 'delete-button' });
    deleteButtonElement.props.onPress();

    expect(onDeleteTodo).toHaveBeenCalledWith(1);
  });
});
