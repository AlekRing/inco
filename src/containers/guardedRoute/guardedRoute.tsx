import React, { Component, FC } from 'react';
import { Route, Navigate } from "react-router-dom";

interface GuardedRouteProps {
    component: Component;
    auth: boolean;
    props: 
}

const GuardedRoute: FC<GuardedRouteProps> = ({ component, auth, ...rest, props }) => {

    if (!auth) return <Navigate to='/' />;

    return <Route {...rest} element={<Component {...props} />} />
};

export default GuardedRoute;