import "./App.css";
import Header from "./components/Header.tsx";
import MainBoard from "./components/MainBoard.tsx";
import LoginPage from "./components/LoginPage.tsx";
import {Box} from "@mui/material";
import LoginService from "./services/login-service.tsx";
import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";


const PrivateRoute = ({ children }: { children: React.ReactElement }) => {
    const [loading, setLoading] = React.useState(true);
    const [authenticated, setAuthenticated] = React.useState(false);

    React.useEffect(() => {
        const authenticated = LoginService.isLoggedIn();
        setAuthenticated(authenticated);
        setLoading(false);
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return authenticated ? children : <Navigate to="/login" replace />;
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
