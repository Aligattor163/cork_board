import React from 'react'
import {Backdrop, CircularProgress} from "@mui/material";
import {useLoadingStore} from "../../stores/loading-store.ts";

const LoadingBackDrop: React.FC = () => {
    return (
        <Backdrop
            sx={(theme) => ({color: '#fff', zIndex: theme.zIndex.drawer + 11202})}
            open={useLoadingStore(state => state.isLoading)}>
            <CircularProgress color="inherit"/>
        </Backdrop>
    )
}

export default LoadingBackDrop
