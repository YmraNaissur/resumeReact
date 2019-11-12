import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { savePost, sendMessage, setNewPostText } from './redux/state';

export let rerenderEntireTree = (state) => {
    ReactDOM.render (
        <BrowserRouter>
            <App state={state} savePost={savePost} sendMessage={sendMessage}
                setNewPostText={setNewPostText} />
        </BrowserRouter>, document.getElementById("root")
    )
}