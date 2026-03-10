import {create} from 'zustand'
import {immer} from "zustand/middleware/immer";

interface LoadingStoreState {
    isLoading: boolean
}

interface LoadingStoreActions {
    switchLoading: (value: boolean) => void
}

interface LoadingStore extends LoadingStoreState, LoadingStoreActions {
}

const loadingStoreInitialState: LoadingStoreState = {
    isLoading: false
}

export const useLoadingStore = create<LoadingStore>()(
    immer((set) => (
        {
            ...loadingStoreInitialState,
            switchLoading: (value: boolean) => {
                set((state) => {
                    state.isLoading = value
                })
            }
        }
    )))

