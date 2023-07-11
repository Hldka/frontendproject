import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./store";
import "./styles/styles.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <StoreProvider store={store}>
            <App />
        </StoreProvider>
    </React.StrictMode>
);
