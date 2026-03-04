import {Logger} from "./log-service.tsx";

const LOGIN_ATTRIBUTE = "isLoggedIn"

export const LoginService = {
    isLoggedIn: (): boolean => localStorage.getItem(LOGIN_ATTRIBUTE) === "true",
    login: (): void => {
        Logger.debug("Logging in...")
        localStorage.setItem(LOGIN_ATTRIBUTE, "true")
    },
    logout: (): void => {
        Logger.debug("Logging out...")
        localStorage.setItem(LOGIN_ATTRIBUTE, "false")
    }
}