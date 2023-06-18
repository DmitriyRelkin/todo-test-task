import * as LocalAuthentication from 'expo-local-authentication';
import { useDispatch } from "react-redux";
import { setAuthenticationStatus } from "../store/slices/authenticationSlice";

const useAuthentication = () => {
  const dispatch = useDispatch();

  const onAuthenticate = async () => {
    try {
      const { success } = await LocalAuthentication.authenticateAsync();
      dispatch(setAuthenticationStatus(success));
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return {
    onAuthenticate,
  }
};

export default useAuthentication;
