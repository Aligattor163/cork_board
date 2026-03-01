import React from 'react';
import {Box} from "@mui/material";

const mainBoardSx = {
    transition: "transform 0.2s ease",
    "&:hover": {
        transform: "scale(1.005)"
    }
}

const MainBoard: React.FC = () => {
    return <Box sx={mainBoardSx}>
        <Box
            component="img"
            src="/images/board_2k.png"
            sx={{
                width: "100%",
                height: "100%",
            }}
        />
    </Box>;
};

export default MainBoard;