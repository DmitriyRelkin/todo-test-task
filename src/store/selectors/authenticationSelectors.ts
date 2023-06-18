import {RootState} from "../index";

export const getAuthenticationStatus = (state: RootState) => state?.authenticationStatus?.isAuthenticated;
