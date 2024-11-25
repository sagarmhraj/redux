import { createSlice } from "@reduxjs/toolkit";

let Slice = createSlice({
    name: "counter",
    initialState: { count: 0 },
    reducers: {
        incrementData: (state, action) => {
            state.count += action.payload
        },
        decrementData: (state, action) => {
            state.count -= action.payload
        }
    }
})

export const { incrementData, decrementData } = Slice.actions

export default Slice.reducer