import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { getAuthScreenStyle} from "./styles";
import useAuthentication from "../../hooks/useAuthentication";

const AuthScreen: React.FC = () => {
  const { container, btnStyle, btnText } = getAuthScreenStyle();
  const { onAuthenticate } = useAuthentication();

  return (
    <View style={container}>
      <TouchableOpacity testID="auth-button" style={btnStyle} onPress={onAuthenticate}>
        <Text style={btnText}>Authenticate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthScreen;
