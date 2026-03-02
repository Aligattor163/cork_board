import React from 'react';
import {Box} from "@mui/material";

const woodTexture: string = "/images/board_border_background.jpg"
const corkTexture: string = "/images/board_background.jpg"

const mainBoardSx = {
    backgroundColor: "#fff",
    p: 2,
    transition: "transform 0.2s ease",
    "&:hover": {
        transform: "scale(1.005)"
    }
}

const boardBorderSx = {
    border: "1px solid black",
    borderRadius: "20px",
    p: "20px", // board thickness
    boxSizing: "border-box",
    boxShadow: "0 4px 12px rgba(0,0,0,1)",

    backgroundImage: `
                    linear-gradient(
                      135deg,
                      rgba(255,255,255,0.35) 0%,
                      rgba(255,255,255,0.15) 20%,
                      rgba(255,255,255,0) 40%
                    ),
                    linear-gradient(
                      315deg,
                      rgba(0,0,0,0.55) 0%,
                      rgba(0,0,0,0.1) 25%,
                      rgba(0,0,0,0) 50%
                    ),
                    url(${woodTexture})
                 `,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    backgroundAttachment: "local"
}

const borderBackgroundSx = {
    border: "1px solid black",
    borderRadius: "10px",
    backgroundImage: `url(${corkTexture})`,
    backgroundSize: "auto",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    backgroundAttachment: "local",
    width: "100%",
    height: "100%",
    minHeight: "calc(100vh - 200px)",
    p: 2,
    boxSizing: "border-box",
    boxShadow: "inset 0 0 20px rgba(0,0,0,1)"
}

const MainBoard: React.FC = () => {
    return <Box sx={mainBoardSx}>
        <Box id="board_border"
             sx={boardBorderSx}>
            <Box id="border_background"
                 sx={borderBackgroundSx}>
            </Box>
        </Box>
    </Box>;
};

export default MainBoard;