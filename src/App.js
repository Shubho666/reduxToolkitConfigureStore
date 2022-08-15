// import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
// import {increment,decrement,logIn} from './actions';
// import * as allactions from './actions';

import * as allSliceActions from './slices';
import { Outlet, Link } from "react-router-dom";
// import SomeComponent from './SomeComponent';

// import {increment,decrement} from './slices/counterSlice';
// import {signin} from './slices/isLoggedSlice';

function App() {
  const counter = useSelector(state => state.counter.value);
  const isLogged = useSelector(state => state.isLogged.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(allSliceActions.increment(5))}>+</button>
      <button onClick={() => dispatch(allSliceActions.decrement())}>-</button>
      <button onClick={() => dispatch(allSliceActions.incrementAsync(3))}>+Async</button>
      
      <button onClick={() => dispatch(allSliceActions.reset())}>reset</button>
      {isLogged ? <h3>valuable info i shouldnt see</h3> : ""}
      <button onClick={() => dispatch(allSliceActions.togglesignin())}>Log {isLogged ? "Out" : "In"}</button>
      {/* http://localhost:3000/ */}
      <br/>
      {/* <iframe src="http://localhost:3000/index.html" height="800px" width="100%" title="Iframe Example"></iframe> */}
      {/* <SomeComponent /> */}
      <Link to="/ex">Invoices</Link>
    </div>
    
  );
}

export default App;
