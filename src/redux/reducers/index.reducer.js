import { createSlice } from "@reduxjs/toolkit";

export const pokemonData = createSlice({
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

export const {add, clean} = pokemonData.actions;

export default pokemonData.reducer;

