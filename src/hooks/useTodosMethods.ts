import { useEffect, useState } from "react";
import { addTodo, updateTodo, ITodo, removeTodo } from "../store/slices/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { getTodoItemByIdSelector } from "../store/selectors/todosSelectors";
import {defaultTexts} from "../consts/texts";

const { addBtnText, updateBtnText } = defaultTexts;

export const useTodosMethods = () => {
  // State value of selected todo item
  const [selectedItemId, setSelectedItemId] = useState<null | number>(null);
  // get selected todo item by id
  const selectedTodoItem = useSelector(getTodoItemByIdSelector(selectedItemId));
  // State value for a new todo item
  const [newTodoText, setNewTodoText] = useState('');
  // State value for selected todo item
  const [updateTodoText, setUpdateTodoText] = useState<string | undefined>('');

  const dispatch = useDispatch();

  useEffect(() => {
    setUpdateTodoText(selectedTodoItem?.text);
  }, [selectedItemId]);

  // Title value for add / update button
  const buttonText = selectedItemId ? updateBtnText : addBtnText;
  // text input value
  const inputValue = selectedItemId ? updateTodoText : newTodoText;

  // Add new todo item
  const handleAddTodo = () => {
    const newTodo: ITodo = { id: Date.now(), text: newTodoText }
    dispatch(addTodo(newTodo));
    setNewTodoText("");
  };

  // Update todo item
  const handleUpdateTodo = (id: number, text: string) => {
    dispatch(updateTodo({id, text}));
  };

  // Remove todo item
  const handleDeleteTodo = (id: number) => {
    dispatch(removeTodo(id));
    setSelectedItemId(null);
    setUpdateTodoText('');
  };

  const handleUpdateTodoText = (text: string) => {
    if (selectedItemId) {
      setUpdateTodoText(text)
    } else {
      setNewTodoText(text);
    }
  }

  const onSelectItem = (id: number) => {
    setSelectedItemId(id);
  }

  // Handler to process the callback
  const onPress = () => {
    if (selectedItemId && updateTodoText) {
      handleUpdateTodo(selectedItemId, updateTodoText);
      setUpdateTodoText('');
      setSelectedItemId(null)
    } else {
      handleAddTodo();
    }
  }

  return {
    handleAddTodo,
    handleUpdateTodo,
    handleDeleteTodo,
    handleUpdateTodoText,
    inputValue,
    selectedItemId,
    onSelectItem,
    buttonText,
    onPress,
  }
}


