import {Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar} from "@mui/material";
import React, {useState} from 'react';
import Dashboard from "@mui/icons-material/Dashboard";
import Settings from "@mui/icons-material/Settings";

const collapsedWidth = 60;
const expandedWidth = 240;

const MenuRight: React.FC = () => {
    const [hover, setHover] = useState(false);
    return (
        <Box sx={{
            display: "flex"
        }}>
            <Drawer
                variant="permanent"
                anchor="right"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                sx={{
                    width: hover ? expandedWidth : collapsedWidth,
                    flexShrink: 0,
                    whiteSpace: "nowrap",
                    transition: "width 0.3s",
                    "& .MuiDrawer-paper": {
                        width: hover ? expandedWidth : collapsedWidth,
                        transition: "width 0.3s",
                        overflowX: "hidden",
                    },
                }}
            >
                <Toolbar/>
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <Dashboard/>
                        </ListItemIcon>
                        {hover && <ListItemText primary="Dashboard"/>}
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <Settings/>
                        </ListItemIcon>
                        {hover && <ListItemText primary="Settings"/>}
                    </ListItemButton>
                </List>
            </Drawer>

            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <Toolbar/>
                Main Content
            </Box>
        </Box>
    );

};

export default MenuRight;