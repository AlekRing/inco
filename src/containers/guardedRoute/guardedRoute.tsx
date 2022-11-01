import React, { Component, FC } from 'react';
import { Route, Navigate } from "react-router-dom";

interface GuardedRouteProps {
    component: Component;
    auth: boolean;
    props: any;
};

const GuardedRoute: FC<GuardedRouteProps> = ({ component, auth, props, ...rest }) => {

    if (!auth) return <Navigate to='/' />; // rework

    return <Route {...rest} element={<Component {...props} />} />
};

export default GuardedRoute;