import classesReducer from "./classSlice"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        classes: classesReducer
    }
})

export default store
