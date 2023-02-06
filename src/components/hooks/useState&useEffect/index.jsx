import React, { useEffect, useState } from "react";
import UnMount from "./unmount";

const UseStateAndUseEffect = () => {
  const [method, setMethod] = useState(true);
  const [mount, setUnMount] = useState(true);

  //useEffect => ComponentDidMount
  useEffect(() => {
    console.log("useEffect ComponentDidMount");
  }, []);

  //useEffect => ComponentDidUpdate
  useEffect(() => {
    console.log("useEffect ComponentDidUpdate");
  }, [method]);

  const updateHandler = () => {
    setMethod(!method);
  };

  return (
    <div>
      <h2>Hooks</h2>
      <h2>useState and useEffect Hooks</h2>
      {method ? <h2>ComponentDidMount</h2> : <h2>componentDidUpdate</h2>}
      <button onClick={updateHandler}>Update Method</button>
      <br />
      <br />
      {mount ? <UnMount /> : null}
      <button onClick={() => setUnMount(!mount)}>Unmount Method</button>
      <hr />
    </div>
  );
};

export default UseStateAndUseEffect;
