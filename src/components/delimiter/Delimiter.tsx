import React from "react";
import {View} from "react-native";
import {getDelimiterStyles} from "./styles";

const Delimiter: React.FC = () => {
  const { container } = getDelimiterStyles();

  return (
    <View style={container} />
  );
};

export default Delimiter;
