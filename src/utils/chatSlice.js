import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.message.splice(10, 1);
      state.message.unshift(action.payload);
    },
  },
});

export const { addMessage, removeMessage } = chatSlice.actions;

export default chatSlice.reducer;
