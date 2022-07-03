import React from "react";
import ReactDOM from "react-dom/client";
import "./app/layout/styles.css";
import "react-calendar/dist/Calendar.css"
import App from "./app/layout/App";
import reportWebVitals from "./reportWebVitals";
import { store, StoreContxt } from "./app/stores/store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StoreContxt.Provider value={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreContxt.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
