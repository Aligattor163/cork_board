import "./App.css";
import Header from "./components/Header";
import MainBoard from "./components/MainBoard";
import MenuRight from "./components/MenuRight";
import LoginPage from "./components/login-page/LoginPage.tsx";
import {LoginService} from "./services/login-service.tsx";

function App() {

    if (LoginService.isLoggedIn()) {
        console.log("ONE: ", LoginService.isLoggedIn())
        return (
            <div className="app-container">
                <Header/>
                <MainBoard/>
                <MenuRight/>
            </div>
        );
    }

    console.log("TWO")

    return <LoginPage/>
}

export default App;
