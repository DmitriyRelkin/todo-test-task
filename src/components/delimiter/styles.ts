import { StyleSheet } from "react-native";
import { colors } from "../../consts/colors";

const { steelBlue } = colors;

export const getDelimiterStyles = () =>
  StyleSheet.create({
    container: {
      borderBottomColor: steelBlue,
      borderBottomWidth: 2,
      width: "100%",
      paddingTop: 15,
      marginBottom: 5,
    }
  });

