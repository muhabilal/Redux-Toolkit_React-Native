// import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//     value: 0,
//     name: "ali"
// }
// export const counterSlice = createSlice({
//     name: 'counter',
//     initialState,
//     reducers: {
//         increment: (state) => {
//             state.value += 1
//         },
//         decrement: (state) => {
//             state.value -= 1
//         },
//         incrementByAmount: (state, action) => {
//             state.value += action.payload
//         },
//         setName: (state, action) => {
//             state.name = action.payload
//         }
//     }
// })

// export const { increment, decrement, incrementByAmount, setName } = counterSlice.actions
// export default counterSlice.reducer



import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: 0,
    name: 'ali'
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        countAction: (state, action) => {
            state.value = action.payload
        },
        setName: (state, action) => {
            state.name = action.payload
        }
    }
})
export const { increment, decrement, countAction, setName } = counterSlice.actions
export default counterSlice.reducer