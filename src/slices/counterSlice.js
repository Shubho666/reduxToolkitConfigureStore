import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0 }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: {
            reducer: (state, action) => {
                state.value += action.payload
            },
            prepare: (val) => {
                return { payload: val || 1 }
            }
        },
        decrement(state) {
            state.value--
        },
        reset(state){
            state.value=0
        }
        // incrementByAmount(state, action) {
        //   state.value += action.payload
        // },
    },
})

export const { increment, decrement,reset } = counterSlice.actions;
export default counterSlice.reducer;