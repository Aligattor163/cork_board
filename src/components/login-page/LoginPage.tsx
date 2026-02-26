import React from 'react'
import {Box, Button, TextField} from "@mui/material";
import './login-page.css'

const LoginPage: React.FC = () => {
    return (
        <div className="login-page">
            <Box component="form" className="login-page__form">
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

export default LoginPage
