import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        addPost(state, action) {
            state.push(action.payload);
        },
        removePost(state, action) {
            state.pull(action.payload);
        }
    }
})

export const {addPost, removePost} = postSlice.actions;
export default postSlice.reducer;