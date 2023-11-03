import { configureStore } from "@reduxjs/toolkit";
import PokemonReducer from "./reducers/index.reducer";
import detailReducer from "./reducers/detail.reducer";
export default configureStore({
    reducer: {
        PokemonDataList: PokemonReducer,
        detail: detailReducer
    },
})

