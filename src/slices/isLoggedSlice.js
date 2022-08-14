import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: false }

const isLoggedSlice = createSlice({
    name: 'isLogged',
    initialState,
    reducers: {
        togglesignin(state) {
            state.value=!state.value
        },
        // decrement(state) {
        //   state.value--
        // },
        // incrementByAmount(state, action) {
        //   state.value += action.payload
        // },
    },
})

export const { togglesignin } = isLoggedSlice.actions;
export default isLoggedSlice.reducer;