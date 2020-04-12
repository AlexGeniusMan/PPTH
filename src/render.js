import {BrowserRouter} from "react-router-dom";
import {addPost} from './redux/state'
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './index.css';

export let rerenderEntireTree = (StateData) => {
    ReactDOM.render(
        <BrowserRouter>
            <App addPost={addPost} StateData={StateData}/>
        </BrowserRouter>
        , document.getElementById('root')
    );
}