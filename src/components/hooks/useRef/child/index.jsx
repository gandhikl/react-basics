import React, { memo } from "react";

const Child = memo(({ name, users, updateUser }) => {
  // console.log("Child component rendered!");
  return (
    <>
      <p>
        Welcome <b>{name}!</b>
      </p>
      <h3>Users List</h3>
      {users.map((user, i) => (
        <p key={i}>
          {i + 1}. {user}
        </p>
      ))}
      <button onClick={updateUser}>Update User</button>
    </>
  );
});

export default Child;
