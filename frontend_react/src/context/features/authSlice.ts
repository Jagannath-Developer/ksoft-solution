import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
        if(action.payload.type === 'login'){
            state.auth = false;
        }else{
            state.auth = true;
        }
    },
    signUp: (state, action) => {
      state.auth = action.payload;
    },
  },
});

export const { login, signUp } = authSlice.actions;
export default authSlice.reducer;
