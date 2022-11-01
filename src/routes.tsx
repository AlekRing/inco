import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage/loginPage";
import MainPage from "./pages/mainPage/main";
import ProfilePage from "./pages/profilePage/profilePage";
import RegistrationPage from "./pages/signUpPage/signUpPage";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />}  />
                <Route path='/signup' element={<RegistrationPage />}  />
                <Route path='/login' element={<LoginPage />}  />
                <Route path='/profile' element={<ProfilePage />}  />
            </Routes>
        </BrowserRouter>
    )
};

export default AppRoutes;
