import "./App.css";
import Header from "./components/header/Header.tsx";
import MainBoard from "./components/MainBoard";
import MenuRight from "./components/MenuRight";
import LoginPage from "./components/login-page/LoginPage.tsx";
import {LoginService} from "./services/login-service.tsx";
import {useState} from "react";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(LoginService.isLoggedIn());

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
            <div className="app-container">
                <Header onLogout={handleLogout}/>
                <MainBoard/>
                <MenuRight/>
            </div>
        );
    }
    return <LoginPage onLogin={handleLogin}/>
}

export default App;
