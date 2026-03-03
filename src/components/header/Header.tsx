import AppBar from "@mui/material/AppBar"
import IconButton from "@mui/material/IconButton"
import Toolbar from "@mui/material/Toolbar"
import React from 'react'
import {Box, Menu, MenuItem, Typography} from "@mui/material";
import {AccountCircleOutlined} from "@mui/icons-material";

interface HeaderProps {
    onLogout: () => void,
    mainColor: string
}

const Header: React.FC<HeaderProps> = ({onLogout, mainColor}) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const strokeColor: string = '#47150a';

    const headerTextValue: string = "Cork board";

    return (
        <AppBar position="sticky"
                sx={{
                    boxShadow: "none",
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }}>
            <Toolbar sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                background: mainColor
            }}>
                <Box sx={{
                    display: "grid",
                    gridAutoFlow: "column",
                    transition: "transform 0.2s ease",
                    "&:hover": {
                        opacity: 0.8,
                        transform: "scale(1.05)"
                    }
                }}>
                    <Box sx={{
                        position: 'relative',
                        display: 'inline-block',
                        height: 60,
                        width: 60
                    }}>
                        <Box
                            component="img"
                            src="images/board_2k.png"
                            alt="Logo"
                            sx={{
                                display: "block",
                                height: "100%"
                            }}>
                        </Box>
                        <Box
                            sx={{
                                position: 'absolute',
                                top: "45%",
                                left: "50%",
                                transform: 'translate(-50%, -50%)',
                                fontFamily: '"Cherry Bomb One", system-ui',
                                fontSize: '2.5rem',
                                fontWeight: 400,
                                color: '#ffffff',
                                WebkitTextStroke: `1px ${strokeColor}`,
                            }}
                        >
                            {headerTextValue[0]}
                        </Box>
                    </Box>
                    <Typography component="div"
                                sx={{
                                    fontFamily: '"Cherry Bomb One", system-ui',
                                    fontWeight: 400,
                                    fontStyle: 'normal',
                                    fontSize: '2rem',
                                    mt: '5px',
                                    ml: '-17px',
                                    zIndex: 0,
                                    WebkitTextStroke: `1px ${strokeColor}`
                                }}>
                        {headerTextValue.substring(1)}
                    </Typography>
                </Box>

                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit">
                    <AccountCircleOutlined sx={{
                        color: strokeColor,
                        transition: "transform 0.2s ease",
                        "&:hover": {
                            opacity: "80%",
                            transform: "scale(1.05)"
                        }
                    }}/>
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}>
                    <MenuItem onClick={() => {
                        onLogout();
                        handleClose();
                    }}>
                        Logout
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default Header
