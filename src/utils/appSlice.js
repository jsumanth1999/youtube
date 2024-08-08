import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isOpenMenu: true,
  },
  reducers: {
    toogleMenu: (state) => {
      state.isOpenMenu = !state.isOpenMenu;
    },
    closeMenu: (state) => {
      state.isOpenMenu = false;
    }
  },
});

export const { toogleMenu,closeMenu } = appSlice.actions;

export default appSlice.reducer;
