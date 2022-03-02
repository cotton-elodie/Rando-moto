import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import {BrowserRouter} from "react-router-dom";
import './Styles/index.scss';
import {Provider} from "react-redux";
import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
