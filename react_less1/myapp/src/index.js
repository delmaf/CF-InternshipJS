import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import i18n from "../src/i18n/i18n";
import App from "./App";
import { store } from "./Redux/store";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(store.getState());

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>
  </React.StrictMode>
);
