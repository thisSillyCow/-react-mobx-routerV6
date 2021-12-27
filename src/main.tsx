import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
import { Provider, } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import store from "./mobx/index"
import AppWrapper from "./router/index"

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppWrapper />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
