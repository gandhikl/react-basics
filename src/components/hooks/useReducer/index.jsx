import React, { useContext, useReducer } from "react";
import { ThemeContext } from "..";
import "./useReducer.css";

const UseReducer = () => {
  const value = useContext(ThemeContext);
  const { theme, themeHandler } = value;

  const initialValue = {
    count: 0,
    toggleCounter: true,
  };

  const reducer = (state, action) => {
    console.log("called from useReducer Hook");
    switch (action.type) {
      case "decrement":
        return { ...state, count: state.count - 1 };
      case "reset":
        return { ...state, count: 0 };
      case "increment":
        return { ...state, count: state.count + 1 };
      case "toggleCounter":
        return { ...state, toggleCounter: !state.toggleCounter };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialValue);

  const buttonDisable = state.count === 0 ? true : false;
  const buttonToggle = state.toggleCounter ? "Hide Counter" : "Show Counter";

  return (
    <div className={`reducer-container ${theme ? "light" : "dark"} `}>
      {state.toggleCounter ? (
        <>
          <h2>
            <span>useReducer and useContext Hook</span>
            <button onClick={themeHandler}>{theme ? "Dark" : "Light"}</button>
          </h2>
          <h1>{state.count}</h1>
          <button onClick={() => dispatch({ type: "decrement" })}>
            Decrement
          </button>
          <button
            onClick={() => dispatch({ type: "reset" })}
            disabled={buttonDisable}
          >
            Reset
          </button>
          <button onClick={() => dispatch({ type: "increment" })}>
            Increment
          </button>
        </>
      ) : null}
      <br />
      <br />
      <button onClick={() => dispatch({ type: "toggleCounter" })}>
        {buttonToggle}
      </button>
    </div>
  );
};

export default UseReducer;
