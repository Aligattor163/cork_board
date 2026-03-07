import {create, type StateCreator} from 'zustand'
import type {Token, User} from "../../shared/types/AppTypes.ts";
import ApiService from "../src/services/api-service";
import Routes from "../../shared/Routes";
import Logger from "../src/services/log-service";
import {immer} from "zustand/middleware/immer";
import {createJSONStorage, persist} from "zustand/middleware";

interface AuthStoreInitialState {
    token: Token,
    isLogged: boolean
}

interface AuthStoreActions {
    setToken: (token: Token) => void,
    resetToken: () => void,
    isValidToken: () => Promise<boolean>,
    login: (email: string, password: string) => void,
    logout: () => void
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
        Logger.debug("Logging in...")
        await ApiService
            .post(Routes.authenticate, {email: email, password: btoa(password)} as User)
            .then((resp) => {
                set((state) => {
                    state.token = resp.data;
                    state.isLogged = true;
                })
            })
            .catch((err => {
                Logger.error(`Login failed with <${err}>`)
            }))
    },
    logout: () => {
        get().resetToken();
    }
});

export const useAuthStore = create<AuthStoreState>()(
    immer(
        persist(authStore, {
            name: "auth-storage",
            storage: createJSONStorage(() => sessionStorage),
            partialize: (state) => ({token: state.token}),
        })
    )
)
