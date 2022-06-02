import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import App from "./App";
import "./scss/index.scss";

ReactDOM.render(
      <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                  <App />
            </PersistGate>
      </Provider>,
      document.getElementById("root")
);
