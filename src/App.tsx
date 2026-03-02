import "./App.css";
import Header from "./components/header/Header.tsx";
import MainBoard from "./components/MainBoard";
import MenuRight from "./components/MenuRight";
import LoginPage from "./components/login-page/LoginPage.tsx";
import {LoginService} from "./services/login-service.tsx";
import {useState} from "react";
import {Box} from "@mui/material";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(LoginService.isLoggedIn());

    const mainToolbarColor: string = '#fdc964';

    const handleLogin = () => {
        LoginService.login();
        setIsAuthenticated(true);
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
