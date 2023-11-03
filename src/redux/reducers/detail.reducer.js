import { createSlice } from "@reduxjs/toolkit";

export const detailReducer = createSlice({
    name:'detail',
    initialState:{
        data: {}
    },
    reducers:{
        add: (state, action) => {
            state.data = {
                ...action.payload
            }
                
           
        },
    }
})

export const {add} = detailReducer.actions;

export default detailReducer.reducer;

