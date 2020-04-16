import {addPost, deletePost} from './redux/state';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './index.css';

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App deletePost={deletePost} addPost={addPost} state={state}/>
        </BrowserRouter>
        , document.getElementById('root')
    );
}