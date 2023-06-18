import { StyleSheet } from "react-native";
import { colors } from "../../consts/colors";

const {steelBlue} = colors;

export const getAuthScreenStyle = () =>
  StyleSheet.create({
    container: {
      width: "100%",
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnStyle: {
      padding: 10,
      backgroundColor: steelBlue,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
    },
    btnText: {
      color: 'white',
      fontSize: 14,
      fontWeight: "600",
    }
  });
