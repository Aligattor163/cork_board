import React from 'react'
import './sticker.css'
import {Box, Typography} from "@mui/material";
import {UtilService} from "../../services/util-service.tsx";

const stickerBodySx = {
    width: 180,
    height: 140,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
};

const stickerHeaderTextSx = {
    fontFamily: "'Comic Sans MS', cursive, sans-serif",
    color: "#3e2723",
    fontSize: "1.2rem",
};

const stickerContentTextSx = {
    fontFamily: "'Comic Sans MS', cursive, sans-serif",
    color: "#3e2723",
    fontSize: "1rem",
};

interface StickerProps {
    headerText: string,
    contentText: string,
    pinColor?: string | undefined,
    paperColor?: string | undefined
}

const Sticker: React.FC<StickerProps> = ({headerText, contentText, pinColor, paperColor}) => {
    const stickerSx = {
        position: "relative",
        width: 150,
        minHeight: 150,
        padding: "20px",
        margin: "40px auto",
        backgroundColor: paperColor || UtilService.getRandomPastelColor(),
        border: "4px solid #3e2723",
        borderRadius: "2px 2px 30px 2px",
        boxShadow: "8px 8px 0 rgba(0,0,0,0.1)",
        transform: "rotate(-2deg)",
        transition: "transform 0.3s ease, z-index 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        zIndex: 1,
        "&:hover": {
            transform: "rotate(0deg) scale(1.05)",
            zIndex: 10
        },
    };

    const stickerPinSx = {
        position: "absolute",
        top: -15,
        left: "50%",
        transform: "translateX(-50%)",
        width: 25,
        height: 25,
        backgroundColor: pinColor || UtilService.getRandomColor(),
        border: "3px solid #3e2723",
        borderRadius: "50%",
        zIndex: 11,
        "&::after": {
            content: "''",
            position: "absolute",
            top: 4,
            left: 4,
            width: 6,
            height: 6,
            backgroundColor: "rgba(255,255,255,0.6)",
            borderRadius: "50%",
        },
    };

    return (
        <Box sx={stickerSx}>
            <Box sx={stickerPinSx}></Box>
            <Box sx={stickerBodySx}>
                <Typography sx={stickerHeaderTextSx}>{headerText}</Typography>
                <Typography sx={stickerContentTextSx}>{contentText}</Typography>
            </Box>
        </Box>
    )
}

export default Sticker
