import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {DataProvider} from "./DataContex";
import App from './App';
import './styles.css';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <DataProvider>
                <App/>
            </DataProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.querySelector('#root')
);
