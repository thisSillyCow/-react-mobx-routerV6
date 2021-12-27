import React from "react";
import { Index } from "../views/index"
import { Inquiry } from '../views/components/inquiry';
import { Offer } from '../views/components/offer';
import { Login } from "../views/login/index"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
    useRoutes,
} from "react-router-dom";
const Component2 = () => {
    return <h1>Component 2</h1>;
};

const App = () => {
    let routes = useRoutes([
        { path: "/", element: <Login /> },
        {
            path: "/home", element: <Index />,
            children: [
                { path: '/home/inquiry', element: <Offer /> },
                { path: '/home/offer/sent', element: <Inquiry /> }
            ],
        },
    ]);
    return routes;
};

const AppWrapper = () => {
    return (
        <App />
    );
};

export default AppWrapper;