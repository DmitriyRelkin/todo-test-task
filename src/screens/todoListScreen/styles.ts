import { StyleSheet } from "react-native";
import { colors } from "../../consts/colors";

const {shadowColor, steelBlue, mainColor} = colors;

export const getTodoListStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: mainColor,
      alignItems: "center",
      width: "100%",
      flex: 1,
      padding: 16,
    },
    todoList: {
      width: "100%",
    },
    title: {
      fontSize: 40,
      color: steelBlue,
      fontWeight: 'bold',
      textShadowColor: '#000000',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 3,
      letterSpacing: 1,
      textAlign: 'center',
    },
    subTitle: {
      fontSize: 14,
      color: steelBlue,
      fontWeight: 'bold',
      letterSpacing: 1,
      textAlign: 'center',
    },
    todoInputWrapper: {
      marginTop: 25,
      shadowColor,
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
      padding: 10,
      backgroundColor: 'white',
      flexDirection: "row",
      borderRadius: 10,
      width: "100%",
      justifyContent: "space-between"
    },
    todoInput: {
      height: 40,
      flex: 1,
    },
    addBtnStyle: {
      backgroundColor: steelBlue,
      width: 100,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
    },
    disabledBtnStyle: {
      opacity: .7,
    },
    addBtnText: {
      color: 'white',
      fontSize: 14,
      fontWeight: "600",
    },
  });
