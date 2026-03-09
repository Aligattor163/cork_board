import {create, type StateCreator} from 'zustand'
import type {Token, User} from "../../shared/types/AppTypes.ts";
import Routes from "../../shared/Routes";
import Logger from "../src/services/log-service.ts";
import {immer} from "zustand/middleware/immer";
import {createJSONStorage, devtools, persist} from "zustand/middleware";
import ApiService from "../src/services/api-service.tsx";

interface AuthStoreInitialState {
    token: Token,
    isLogged: boolean
}

interface AuthStoreActions {
    setToken: (token: Token) => void,
    resetToken: () => void,
    isValidToken: () => Promise<boolean>,
    login: (email: string, password: string) => Promise<void>,
    logout: () => Promise<void>
}

interface AuthStoreState extends AuthStoreInitialState, AuthStoreActions {
}

const authStoreInitialState = {
    token: {
        value: "",
        userID: ""
    } as Token,
    isLogged: false
}

const authStore: StateCreator<AuthStoreState,
    [
        ["zustand/immer", never],
        ["zustand/devtools", never],
        ["zustand/persist", unknown]
    ]> = (set, get) => ({
    ...authStoreInitialState,
    setToken: (token: Token) => {
        set((state) => {
            state.token = token
        })
    },
    resetToken: () => set((state) => {
        state.token = {} as Token;
        state.isLogged = false;
    }),
    isValidToken: async (): Promise<boolean> => {
        const token: Token = get().token;
        if (token) {
            try {
                await ApiService.get(Routes.checkToken, {params: {token: token.value}});
                return true;
            } catch (err) {
                return false;
            }
        }
        return false;
    },
    login: async (email: string, password: string): Promise<void> => {
        Logger.debug("[AuthStore] Logging in...")

        try {
            const resp = await ApiService.post(Routes.authenticate, {email: email, password: btoa(password)} as User);
            set((state) => {
                Logger.debug("[AuthStore] Got token from BE")
                state.token = resp.data;
                state.isLogged = true;
            })
            Logger.debug("[AuthStore] Successfully authenticated");
        } catch (err) {
            Logger.error(`[AuthStore] Login failed with <${err}>`)
        }
    },
    logout: async () => {
        try {
            await ApiService.post(Routes.logout);
            Logger.debug("[AuthStore] Successfully logged out");
        } catch (err) {
            Logger.error(`[AuthStore] An unexpected error during logout: <${err}>`)
        } finally {
            get().resetToken();
        }
    }
});

export const useAuthStore = create<AuthStoreState>()(
    immer(
        devtools(
            persist(authStore, {
                    name: "auth-storage",
                    storage: createJSONStorage(() => sessionStorage)
                }
            )
        )
    )
)
