import { configureStore } from "@reduxjs/toolkit";
import myreducer from "./CreateSlice"

let Store = configureStore({
    reducer: {
        reducer1: myreducer
    }
})


export default Store