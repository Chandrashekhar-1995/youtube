import { createSlice } from "@reduxjs/toolkit";


const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages:[],
    },
    reducers: {
        addMessages: (state, action) => {
            state.messages.push(action.payload)
        }
    }
});

export const { addMessages } = chatSlice.actions;
export default chatSlice.reducer;