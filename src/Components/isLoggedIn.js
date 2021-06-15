import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const isLoggedIn = createSlice({
  name: "authenticator",
  initialState,
  reducers: {
    authenticator: (state, action) => {
      state.isLoggedIn = true;
    },
  },
});

export const {} = isLoggedIn.actions;
export default isLoggedIn.reducer;
