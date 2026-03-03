import {Box, Drawer} from "@mui/material";
import React, {useState} from 'react';
import {MenuOpenRounded} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

const collapsedWidth = 60;
const expandedWidth = 500;

interface MenuRightProps {
    mainColor: string
}

const MenuRight: React.FC<MenuRightProps> = ({mainColor}) => {
    const [toggle, setToggle] = useState(false);

    const menuDrawerSx = {
        flexShrink: 0,
        whiteSpace: "nowrap",
        "& .MuiDrawer-paper": {
            borderTop: "1px solid #47150a",
            width: toggle ? expandedWidth : collapsedWidth,
            transition: "width 0.3s",
            overflowX: "hidden",
            top: "64px",
            height: "calc(100% - 64px)",
            backgroundColor: mainColor,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            boxShadow: toggle
                ? "-40px 0 16px rgba(0,0,0,0.6)"
                : "none"
        }
    }

    const menuToggleButtonSx = {
        display: "flex",
        justifyContent: "flex-start",
        p: 1
    }

    return (
        <Drawer id="menu_right"
                variant="permanent"
                anchor="right"
                onClick={() => setToggle(!toggle)}
                sx={menuDrawerSx}>
            <Box id="menu_right_toggle_button"
                 sx={menuToggleButtonSx}>
                <IconButton
                    size="large"
                    color="inherit">
                    <MenuOpenRounded sx={toggle ? {transform: "scaleX(-1)"} : {}}/>
                </IconButton>
            </Box>
        </Drawer>
    );

};

export default MenuRight;