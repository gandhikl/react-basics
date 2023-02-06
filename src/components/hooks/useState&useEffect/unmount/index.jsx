import React, { useEffect } from "react";

const UnMount = () => {
  useEffect(() => {
    // useEffect => ComponentWillUnMount
    return () => {
      console.warn("useEffect ComponentWillUnMount");
    };
  }, []);
  return (
    <div>
      <h3>ComponentWillUnMount</h3>
    </div>
  );
};

export default UnMount;
