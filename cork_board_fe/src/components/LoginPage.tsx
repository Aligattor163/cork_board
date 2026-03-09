import React, {useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {ReplyOutlined} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import {useAuthStore} from "../../stores/auth-store.ts";
import {useNavigate} from "react-router-dom";
import Logger from "../services/log-service.ts";


// @ts-ignore
enum START_OPTIONS {
    start = "start",
    login = "login",
    register = "register"
}

const LoginPage: React.FC = () => {
    const [option, setOption] = useState<START_OPTIONS>(START_OPTIONS.start);

    const formInitData = {email: "Admin@mail.com", password: "admin", passwordConfirm: ""};
    const [formData, setFormData] = useState(formInitData);

    const navigate = useNavigate();

    const redirect = (url: string, isReplace?: boolean) => {
        Logger.debug(`[LoginPage] Redirecting to <${url}>`);
        navigate(url, {replace: !!isReplace});
    }
    const login = useAuthStore(state => state.login);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value || ""}))
    }
    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        await login(formData.email, formData.password);
        redirect("/", true);
        handleClose();
    }
    const handleClose = () => {
        setFormData(formInitData);
    }

    const formSx = {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: option !== START_OPTIONS.register ? '10px' : 0,
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

    const backButtonSx = (top: number, right: number) => ({
        color: 'black',
        position: "absolute",
        transition: "transform 0.2s ease",
        top: `${top}px`,
        right: `${right}px`,
        "svg": {
            fontSize: "30px"
        },
        "&:hover": {
            transform: "scale(1.2)",
            backgroundColor: 'transparent'
        }
    });

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
                <Box component="form" sx={formSx} onSubmit={handleSubmit}>
                    <IconButton
                        sx={backButtonSx(-12, -25)}
                        size="large"
                        onClick={() => setOption(START_OPTIONS.start)}
                        color="inherit">
                        <ReplyOutlined/>
                    </IconButton>
                    <TextField sx={inputSx}
                               name="email"
                               value={formData.email}
                               label="Email"
                               type="email"
                               variant="standard"
                               fullWidth margin="normal"
                               onChange={handleChange}/>
                    <TextField sx={inputSx}
                               name="password"
                               value={formData.password}
                               label="Password"
                               type="password"
                               variant="standard"
                               fullWidth
                               margin="normal"
                               onChange={handleChange}/>
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
                    <IconButton
                        sx={backButtonSx(15, -23)}
                        size="large"
                        onClick={() => {
                            setOption(START_OPTIONS.start);
                            handleClose();
                        }}
                        color="inherit">
                        <ReplyOutlined/>
                    </IconButton>
                    <TextField
                        sx={inputSx}
                        name="email"
                        value={formData.email}
                        label="Email"
                        type="email"
                        variant="standard"
                        fullWidth margin="normal"
                        onChange={handleChange}/>
                    <TextField sx={inputSx}
                               name="password"
                               value={formData.password}
                               label="Password"
                               type="password"
                               variant="standard"
                               fullWidth margin="normal"
                               onChange={handleChange}/>
                    <TextField sx={inputSx}
                               name="passwordConfirm"
                               value={formData.passwordConfirm}
                               label="Password confirmation"
                               type="password"
                               variant="standard"
                               fullWidth margin="normal"
                               onChange={handleChange}/>
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
