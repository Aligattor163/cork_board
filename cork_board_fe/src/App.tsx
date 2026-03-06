import "./App.css";
import Header from "./components/Header.tsx";
import MainBoard from "./components/MainBoard.tsx";
import LoginPage from "./components/LoginPage.tsx";
import {Box} from "@mui/material";
import LoginService from "./services/login-service.tsx";
import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";


const PrivateRoute = ({children}: { children: React.ReactElement }) => {
    return LoginService.isLoggedIn() ? children : <Navigate to="/login" replace/>;
};

function App() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route
                path="/"
                element={
                    <PrivateRoute>
                        <Box>
                            <Header/>
                            <MainBoard/>
                        </Box>
                    </PrivateRoute>
                }
            />
            <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
    )
}

export default App;
