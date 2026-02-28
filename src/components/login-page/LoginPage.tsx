import React, {useState} from 'react'
import {Box, Button, TextField} from "@mui/material";
import './login-page.css'

interface LoginPageProps {
    onLogin: () => void
}

// @ts-ignore
enum START_OPTIONS {
    start = "start",
    login = "login",
    register = "register"
}

const LoginPage: React.FC<LoginPageProps> = ({onLogin}) => {
    const [option, setOption] = useState<START_OPTIONS>(START_OPTIONS.start);

    if (option === START_OPTIONS.start) {
        return (
            <div className="login-page">
                <div className="login-page__form">
                    <Button className="login-page__submit-button"
                            variant="contained"
                            onClick={() => {
                                setOption(START_OPTIONS.login)
                            }}>
                        Login
                    </Button>
                    <Button className="login-page__submit-button"
                            variant="contained"
                            onClick={() => {
                                setOption(START_OPTIONS.register)
                            }}>
                        Register
                    </Button>
                </div>
            </div>
        )
    }

    if (option === START_OPTIONS.login) {
        return (
            <div className="login-page">
                <Box component="form"
                     className="login-page__form"
                     onSubmit={onLogin}>

                    <TextField className="login-page__form-input"
                               label="Email"
                               type="email"
                               fullWidth
                               margin="normal"
                               variant="standard"/>

                    <TextField className="login-page__form-input"
                               label="Password"
                               type="password"
                               fullWidth
                               margin="normal"
                               variant="standard"/>

                    <Button className="login-page__submit-button"
                            type="submit"
                            variant="contained">
                        Login
                    </Button>
                </Box>
            </div>
        )
    }

    if (option === START_OPTIONS.register) {
        return (
            <div className="login-page">
                <Box component="form"
                     className="login-page__form"
                     onSubmit={() => setOption(START_OPTIONS.login)}>

                    <TextField className="login-page__form-input"
                               label="Email"
                               type="email"
                               fullWidth
                               margin="normal"
                               variant="standard"/>

                    <TextField className="login-page__form-input"
                               label="Password"
                               type="password"
                               fullWidth
                               margin="normal"
                               variant="standard"/>

                    <TextField className="login-page__form-input"
                               label="Password confirmation"
                               type="password"
                               fullWidth
                               margin="normal"
                               variant="standard"/>

                    <Button className="login-page__submit-button"
                            type="submit"
                            variant="contained">
                        Submit
                    </Button>
                </Box>
            </div>
        )
    }

}

export default LoginPage
