import { combineReducers } from 'redux';
import counterReducer from './counterSlice';
// import * as counterSlice from './counterSlice';
import isLoggedReducer from './isLoggedSlice';
// import isLoggedSlice from './isLoggedSlice';

const reducer = combineReducers({
    counter: counterReducer,
    isLogged: isLoggedReducer
});


export default reducer;
// export const {counterSlice.action } = allvars
export * from './counterSlice'
export * from './isLoggedSlice'