import "./App.css";
import Header from "./components/Header.tsx";
import MainBoard from "./components/MainBoard.tsx";
import LoginPage from "./components/LoginPage.tsx";
import {Box} from "@mui/material";
import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {useAuthStore} from "../stores/auth-store.ts";
import LoadingBackDrop from "./components/LoadingBackDrop.tsx";

function App() {
    const PrivateRoute: React.FC<{ children: React.ReactElement }> = ({children}) => {
        return useAuthStore(state => state.isLogged) ? children : <Navigate to="/login" replace/>;
    };

    return (
        <>
            <LoadingBackDrop/>
            <Routes>
                <Route path="/test" element={
                    <textarea placeholder={"test"}/>
                }/>
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
        </>

    )
}

export default App;
