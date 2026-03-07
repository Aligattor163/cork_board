import Logger from "./log-service.tsx";
import ApiService from "./api-service.tsx";
import Routes from "../../../shared/Routes.ts";
import type {Token, User} from "../../../shared/types/AppTypes.ts";
import {useResetToken, useSetToken, useToken} from "../../stores/auth-store.ts";

export const LoginService = {
    isLoggedIn(): boolean {
        console.log("DEBUG isLoggedIn")
        const token: Token | null = useToken();
        if (token) {
            ApiService
                .get(Routes.checkToken, {params: {token: token.value}})
                .then(() => true)
                .catch(() => false)
        }
        return false;
    },
    login(email: string, password: string): void {
        Logger.debug("Logging in...")
        ApiService
            .post(Routes.authenticate, {email: email, password: btoa(password)} as User)
            .then(resp => useSetToken(resp.data))
            .catch(err => Logger.error(`Login failed with <${err}>`))
    },
    logout(): void {
        Logger.debug("Logging out...")
        useResetToken();
    }
}

export default LoginService;
