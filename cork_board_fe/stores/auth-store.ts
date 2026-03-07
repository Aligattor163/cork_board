import {create, type StateCreator} from 'zustand'
import type {Token} from "../../shared/types/AppTypes.ts";
import {createJSONStorage, persist} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";

interface AuthStoreInitialState {
    token: Token
}

interface AuthStoreActions {
    setToken: (token: Token) => void,
    resetToken: () => void
}

interface AuthStoreState extends AuthStoreInitialState, AuthStoreActions {
}

const authStoreInitialState = {
    token: {
        value: "",
        userID: ""
    } as Token
}

const authStore: StateCreator<AuthStoreState,
    [
        ["zustand/immer", never],
        ["zustand/persist", unknown]
    ]> = (set) => ({
    ...authStoreInitialState,
    setToken: (token: Token) => {
        set((state) => {
            state.token = token
        })
    },
    resetToken: () => set((state) => {
        state.token = {} as Token
    })
})


const useAuthStore = create<AuthStoreState>()(
    immer(
        persist(authStore, {
            name: "auth-storage",
            storage: createJSONStorage(() => sessionStorage),
            partialize: (state) => ({token: state.token})
        })
    )
)

export const useToken = () => useAuthStore((state) => state.token);
export const useSetToken = (token: Token) => useAuthStore((state) => state.setToken(token));
export const useResetToken = () => useAuthStore((state) => state.resetToken());