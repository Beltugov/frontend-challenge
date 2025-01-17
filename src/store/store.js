import {configureStore} from "@reduxjs/toolkit";

import catReducer from "./slices/CatSlice"

const store = configureStore({
    reducer: {
        catReducer
    },
});

export default store