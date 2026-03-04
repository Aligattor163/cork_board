import "./App.css";
import Header from "./components/header/Header.tsx";
import MainBoard from "./components/MainBoard.tsx";
import MenuRight from "./components/MenuRight.tsx";
import LoginPage from "./components/login-page/LoginPage.tsx";
import {LoginService} from "./services/login-service.tsx";
import {useState} from "react";
import {Box} from "@mui/material";
import { Logger } from "./services/log-service.tsx";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(LoginService.isLoggedIn());

    const mainToolbarColor: string = '#fdc964';

    const handleLogin = () => {
        LoginService.login();
        fetch("api/v1/auth")
            .then(res => res.json())
            .then((res) => setIsAuthenticated(!!res.isAuthenticated)).catch((err) => Logger.error(err));
    };

    const handleLogout = () => {
        LoginService.logout();
        setIsAuthenticated(false);
    };

    if (isAuthenticated) {
        return (
            <Box>
                <Header onLogout={handleLogout} mainColor={mainToolbarColor}/>
                <MainBoard/>
                <MenuRight mainColor={mainToolbarColor}/>
            </Box>
        )
    }
    return <LoginPage onLogin={handleLogin}/>
}

export default App;
