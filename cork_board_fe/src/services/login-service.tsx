import {Logger} from "./log-service.tsx";

export const LoginService = {
    isLoggedIn: (): boolean => !!sessionStorage.getItem("token"),
    login: (): void => {
        Logger.debug("Logging in...")
    },
    logout: (): void => {
        Logger.debug("Logging out...")

    }
}