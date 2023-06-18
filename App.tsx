import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from "./src/screens/authScreen/AuthScreen";
import TodoListScreen from "./src/screens/todoListScreen/TodoListScreen";
import store from "./src/store";
import {Provider as ReduxProvider, useSelector} from "react-redux";
const Stack = createStackNavigator();
import { NavigationContainer } from '@react-navigation/native';
import {getAuthenticationStatus} from "./src/store/selectors/authenticationSelectors";
import {StatusBar} from "react-native";

const MainContent = () => {
  const isAuthenticated = useSelector(getAuthenticationStatus);
  const initialRouteName = isAuthenticated ? "TodoList" : "Auth";

  return (
    <NavigationContainer key={initialRouteName}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={initialRouteName}
      >
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="TodoList" component={TodoListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <ReduxProvider store={store}>
      <StatusBar />
      <MainContent />
    </ReduxProvider>
  );
}
