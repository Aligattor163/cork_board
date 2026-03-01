import React, {useState} from 'react';
import {Box, Button, TextField} from "@mui/material";

interface LoginPageProps {
    onLogin: () => void;
}

// @ts-ignore
enum START_OPTIONS {
    start = "start",
    login = "login",
    register = "register"
}

const LoginPage: React.FC<LoginPageProps> = ({onLogin}) => {
    const [option, setOption] = useState<START_OPTIONS>(START_OPTIONS.start);

    const formSx = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        width: 300,
        pt: '50px'
    };

    const inputSx = {
        width: '100%',
        '& .MuiFilledInput-root': {
            backgroundColor: 'black'
        },
        '& .MuiInput-root::after': {
            borderBottom: '2px solid black'
        },
        '& .MuiInputLabel-root': {
            fontFamily: '"Margarine", sans-serif',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '1.2rem',
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: 'black'
        }
    };

    const buttonSx = {
        color: 'black',
        fontFamily: '"Margarine", sans-serif',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: '2rem',
        width: 180,
        mt: 2,
        p: 0,
        transition: "transform 0.2s ease",
        "&:hover": {
            transform: "scale(1.2)",
            backgroundColor: 'transparent'
        }
    };

    const pageSx = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        position: 'relative',
        '&::before': {
            content: '""',
            position: 'fixed',
            width: '100%',
            height: '100%',
            backgroundImage: 'url("/images/login_logo.png")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            filter: 'drop-shadow(0 16px 32px rgba(0, 0, 0, 0.55)) drop-shadow(0 6px 12px rgba(0, 0, 0, 0.4))',
            zIndex: -1
        }
    };

    if (option === START_OPTIONS.start) {
        return (
            <Box sx={pageSx}>
                <Box sx={formSx}>
                    <Button sx={buttonSx}
                            variant="text"
                            onClick={() => setOption(START_OPTIONS.login)}>
                        Login
                    </Button>
                    <Button sx={buttonSx}
                            variant="text"
                            onClick={() => setOption(START_OPTIONS.register)}>
                        Register
                    </Button>
                </Box>
            </Box>
        );
    }

    if (option === START_OPTIONS.login) {
        return (
            <Box sx={pageSx}>
                <Box component="form" sx={formSx} onSubmit={onLogin}>
                    <TextField sx={inputSx}
                               label="Email"
                               type="email"
                               variant="standard"
                               fullWidth margin="normal"/>
                    <TextField sx={inputSx}
                               label="Password"
                               type="password"
                               variant="standard"
                               fullWidth
                               margin="normal"/>
                    <Button sx={buttonSx}
                            type="submit"
                            variant="text">
                        Login
                    </Button>
                </Box>
            </Box>
        );
    }

    if (option === START_OPTIONS.register) {
        return (
            <Box sx={pageSx}>
                <Box component="form" sx={formSx} onSubmit={() => setOption(START_OPTIONS.login)}>
                    <TextField
                        sx={inputSx}
                        label="Email"
                        type="email" variant="standard" fullWidth margin="normal"/>
                    <TextField sx={inputSx}
                               label="Password"
                               type="password"
                               variant="standard"
                               fullWidth margin="normal"/>
                    <TextField sx={inputSx}
                               label="Password confirmation"
                               type="password"
                               variant="standard"
                               fullWidth margin="normal"/>
                    <Button sx={buttonSx}
                            type="submit"
                            variant="text">
                        Submit
                    </Button>
                </Box>
            </Box>
        );
    }
};

export default LoginPage;
