import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: false }


/**
 * @function isLoggedSlice
 * @description create reducers and action for is Logged
 */
const isLoggedSlice = createSlice({
    name: 'isLogged',
    initialState,
    reducers: {
        /**
         * action for toggling sign in state
         * @param {*} state - the state
         */
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