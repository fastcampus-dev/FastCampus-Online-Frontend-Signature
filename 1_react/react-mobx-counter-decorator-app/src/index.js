import React from "react";
import { render } from 'react-dom';
import App from "./App";
import CounterStore from "./CounterStore";

const store = new CounterStore();

render(
    <div>
        <App counter={store} />
    </div>,
    document.getElementById("root")
)