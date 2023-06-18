import {StyleSheet} from "react-native";
import { colors } from "../../consts/colors";

const { lightCoral, shadowColor, steelBlue } = colors;

export const getTodoItemStyles = () =>
  StyleSheet.create({
    container: {
      shadowColor,
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
      padding: 10,
      backgroundColor: 'white',
      flexDirection: "row",
      alignItems: 'center',
      marginVertical: 8,
      borderRadius: 10,
      justifyContent: "space-between"
    },
    checkboxContainer: {
      marginRight: 8,
    },
    checkbox: {
      width: 20,
      height: 20,
      borderWidth: 1,
      borderColor: '#000',
    },
    title: {
      fontSize: 16,
    },
    deleteButton: {
      backgroundColor: lightCoral,
      width: 100,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
      height: 40,
    },
    deleteButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    selectedItemStyle: {
      borderWidth: 2,
      borderColor: steelBlue,
    }
  });
