import "./App.css";
import Header from "./components/Header";
import MainBoard from "./components/MainBoard";
import MenuRight from "./components/MenuRight";
import LoginPage from "./components/login-page/LoginPage.tsx";

const LOGIN_ATTRIBUTE = "isLoggedIn";

function App() {

    if (isLoggedIn()) {
        return (
            <div className="app-container">
                <Header/>
                <MainBoard/>
                <MenuRight/>
            </div>
        );
    }

    return <LoginPage/>
}

function isLoggedIn(): boolean {
    return localStorage.getItem(LOGIN_ATTRIBUTE) as unknown as boolean | false;
}

export default App;
