import React from 'react';
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router";
import Main from "./pages/Main/Main";
import Favorite from "./pages/Favorite/Favorite";
import Header from "./containers/Header/Header";
import {Provider} from "react-redux";
import store from "./store/store";
import "./index.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={"/"} element={<Main/>}/>
                    <Route path={"/favorite"} element={<Favorite/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);