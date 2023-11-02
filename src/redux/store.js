import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./reducers";
export default configureStore({
    reducer: {
        example: exampleReducer
    },
})

