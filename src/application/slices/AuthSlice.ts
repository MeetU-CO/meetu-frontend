import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

interface IInitialState {
  value: {
    logged: boolean;
    data: {};
  };
}

const initialState: IInitialState = {
  value: {
    logged: false,
    data: {},
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.logged = true;
      state.value.data = action.payload;
    },
    logout: (state) => {
      state.value = {
        logged: false,
        data: {},
      };
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth.value;
export default authSlice.reducer;
