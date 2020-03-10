import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';

let rerenderEntireTree = (store) => {
    ReactDOM.render (
        <BrowserRouter>
            <App store={store}
                dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>, document.getElementById("root")
    )
}

rerenderEntireTree(store);

store.subscribe(() => {
    rerenderEntireTree(store);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();