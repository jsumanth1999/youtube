import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: "search",
    initialState: {

    },
    reducers: {
        searchResults: (state, actions) => {
            state = {...state, ...actions.payload}
        }
    }
});

export const {searchResults} = searchSlice.actions;

export default searchSlice.reducer;

