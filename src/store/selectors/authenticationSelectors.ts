import {RootState} from "../index";

// Return the boolean value for authentication status
export const getAuthenticationStatus = (state: RootState) => state?.authenticationStatus?.isAuthenticated;
