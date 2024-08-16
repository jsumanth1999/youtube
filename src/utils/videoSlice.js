import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    searchVideos: [],
  },
  reducers: {
    addVideos: (state, action) => {
      state.searchVideos = action.payload || [];
    },
    removeVideos: (state, action) => {
        state.searchVideos = [];
    }
  },
});

export const { addVideos,removeVideos } = videoSlice.actions;

export default videoSlice.reducer;
