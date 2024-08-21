import classReducer from "./classSlice"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        class: classReducer
    }
})

export default store
