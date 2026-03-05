import AppBar from "@mui/material/AppBar"
import IconButton from "@mui/material/IconButton"
import Toolbar from "@mui/material/Toolbar"
import React from 'react'
import {Box, Menu, MenuItem, Typography} from "@mui/material";
import {AccountCircleOutlined} from "@mui/icons-material";
import {UtilService} from "../services/util-service.tsx";

interface HeaderProps {
    onLogout: () => void
}

const Header: React.FC<HeaderProps> = ({onLogout}) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                background: UtilService.colors.mainBackgroundColor
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
                                WebkitTextStroke: `1px ${UtilService.colors.mainStrokeColor}`,
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
                                    WebkitTextStroke: `1px ${UtilService.colors.mainStrokeColor}`
                                }}>
                        {headerTextValue.substring(1)}
                    </Typography>
                </Box>

                <Box>
                    <IconButton
                        size="large"
                        onClick={handleMenu}
                        color="inherit">
                        <AccountCircleOutlined sx={{
                            fontSize: "2rem",
                            color: UtilService.colors.mainStrokeColor,
                            transition: "transform 0.2s ease",
                            "&:hover": {
                                opacity: "80%",
                                transform: "scale(1.05)"
                            }
                        }}/>
                    </IconButton>
                    <Menu id="menu-appbar"
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
                          slotProps={{
                              paper: {
                                  sx: {
                                      backgroundColor: UtilService.colors.mainBackgroundColor,
                                      border: `3px solid ${UtilService.colors.mainStrokeColor}`
                                  }
                              },
                              list: {
                                  sx: {
                                      p: 0
                                  }
                              }
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
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header
