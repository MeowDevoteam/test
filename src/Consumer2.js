import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateB } from "./redux/action";

const Consumer2 = (props) => {
  const dispatch = useDispatch();
  const b = useSelector((state) => state.bReducer.b);
  console.log("Consumer2 rendered : ", b);
  return <button onClick={() => dispatch(updateB(b + "!"))}>Change B</button>;
};

export default Consumer2;
