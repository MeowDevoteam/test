import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateC } from "./redux/action";

const Consumer2 = (props) => {
  const dispatch = useDispatch();
  const c = useSelector((state) => state.bReducer.c);
  const b = useSelector((state) => state.bReducer.b);
  console.log("Consumer2 rendered : ", c);
  return <button onClick={() => dispatch(updateC(c + "!"))}>Change C</button>;
};

export default Consumer2;
