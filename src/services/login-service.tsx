import {Logger} from "./log-service.tsx";

const LOGIN_ATTRIBUTE = "isLoggedIn"

export const LoginService = {
    isLoggedIn: () => localStorage.getItem(LOGIN_ATTRIBUTE) === "true",
    login: () => {
        Logger.debug("Logging in...")
        localStorage.setItem(LOGIN_ATTRIBUTE, "true")
    },
    logout: () => {
        Logger.debug("Logging out...")
        localStorage.setItem(LOGIN_ATTRIBUTE, "false")
    }
}