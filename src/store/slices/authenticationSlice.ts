import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthenticationState {
  isAuthenticated: boolean;
}

const initialState: AuthenticationState = {
  isAuthenticated: false,
};

const authenticationSlice = createSlice({
  name: 'authenticationStatus',
  initialState,
  reducers: {
    setAuthenticationStatus: (state: AuthenticationState, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setAuthenticationStatus } = authenticationSlice.actions;
export default authenticationSlice.reducer;
