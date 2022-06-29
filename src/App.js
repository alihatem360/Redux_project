import React, { Component, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { increment, decrement } from "./store/countSlice";
import { counterReducer } from "./store/toolKite-Redux";
import { toggel } from "./store/ToggelCounter";
function App() {
  const dispatch = useDispatch();
  const GlobalState = useSelector((state) => state);

  const isLogin = () => {
    return GlobalState.toggelValue.value;
  };

  return (
    <Fragment>
      {isLogin() && (
        <>
          <div>
            Counter: <span id="counter">{GlobalState.counter.value}</span>
          </div>

          <button id="increase" onClick={() => dispatch(increment())}>
            increase
          </button>

          <button id="decrease" onClick={() => dispatch(decrement())}>
            decrease
          </button>
        </>
      )}

      <p>
        <button onClick={() => dispatch(toggel(5))}>
          {isLogin() ? "logOut" : "login"}
        </button>
      </p>
    </Fragment>
  );
}

export default App;
