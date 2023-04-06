import React from "react";
import { useSelector } from "react-redux";

const Consumer = (props) => {
  const a = useSelector((state) => state.aReducer.a);
  console.log("Consumer1 rendered : ", a);
  return <h1>Testing</h1>;
};

export default Consumer;
