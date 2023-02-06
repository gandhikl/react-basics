import { useCallback, useMemo, useRef, useState } from "react";
import Child from "./child";

const UseRef = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(1);
  const inputRef = useRef(null);
  const [users, setUsers] = useState(["Tom", "Mike"]);
  const factorial = useMemo(() => {
    return squareCount(count);
  }, [count]);

  function squareCount(value) {
    // Heavy Opertaions/Calculation.
    console.log("Called from useMemo Hook");
    return value * value;
  }

  const focusHandler = () => {
    console.log("Called from useRef Hook");
    inputRef.current.focus();
  };

  const updateUser = useCallback(() => {
    console.log("Called from useCallback Hook");
    setUsers([...users, "Tony"]);
  }, [users]);

  return (
    <div>
      <h2>useRef, useMemo, useCallback Hooks</h2>
      <input
        type="text"
        placeholder={"Enter your name"}
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button style={{ marginLeft: "1rem" }} onClick={focusHandler}>
        Focus Input
      </button>
      <Child name={name} users={users} updateUser={updateUser} />
      <h3>
        Square of {count} is {factorial}
      </h3>
      <button onClick={() => setCount(count + 1)}>Update count</button>
      <hr />
    </div>
  );
};

export default UseRef;
