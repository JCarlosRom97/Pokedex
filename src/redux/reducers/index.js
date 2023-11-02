import { createSlice } from "@reduxjs/toolkit";

export const exampleReducer = createSlice({
    name:'reducer',
    initialState:{
        data: []
    },
    reducers:{
        add: (state, action) => {
            state.data = [
                ...action.payload
            ]
        },
    }
})

export const {add} = exampleReducer.actions;

export default exampleReducer.reducer;

