import Logger from "./log-service.tsx";
import ApiService from "./api-service.tsx";
import Routes from "../../../shared/Routes.ts";
import type {User} from "../../../shared/types/AppTypes.ts";

export const LoginService = {
    isLoggedIn(): boolean {
        console.log("DEBUG isLoggedIn")
        const token: string | null = sessionStorage.getItem("token");
        if (token) {
            ApiService
                .get(Routes.checkToken, {params: {token: JSON.parse(token).value}})
                .then(() => true)
                .catch(() => false)
        }
        return false;
    },
    setToken(token: string): void {
        sessionStorage.setItem("token", token)
    },
    removeToken(): void {
        sessionStorage.removeItem("token")
    },
    login(email: string, password: string): void {
        Logger.debug("Logging in...")
        ApiService
            .post(Routes.authenticate, {email: email, password: btoa(password)} as User)
            .then(resp => this.setToken(JSON.stringify(resp.data)))
            .catch(err => Logger.error(`Login failed with <${err}>`))
    },
    logout(): void {
        Logger.debug("Logging out...")
        // TDB
    }
}

export default LoginService;
