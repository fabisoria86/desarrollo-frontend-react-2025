import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginForm: {
    username: "",
    email: "",
    password: "",
    module: "React Mod7",
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    /*setLoginForm: (state, action) => {
      state.loginForm = action.payload;
    },*/
    setLoginForm: (state, action) => {
      state.loginForm.username = action.payload.username || "";
      state.loginForm.email = action.payload.email || "";
      state.loginForm.password = action.payload.password || "";
      state.loginForm.module = action.payload.module || "";
    },
  },
});

export const { setLoginForm } = formSlice.actions;
export default formSlice.reducer;


