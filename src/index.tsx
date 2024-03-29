import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppWithRedux from "./AppWithRedux";
import {Provider} from "react-redux";
import {store} from "./store";



const container = document.getElementById('root') as HTMLElement
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <AppWithRedux/>
    </Provider>
);

serviceWorker.unregister();
