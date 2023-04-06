import React from "react";
import { Provider } from "react-redux";
import Consumer from "./Consumer";
import Consumer2 from "./Consumer2";
import Consumer3 from "./Consumer3";
import store from "./redux/store";
import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <Consumer />
      <Consumer2 />
      <Consumer3 />
    </Provider>
  );
}
