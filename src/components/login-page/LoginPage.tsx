import React from 'react'
import {Box, Button, TextField} from "@mui/material";
import './login-page.css'

const LoginPage: React.FC = () => {
    return (
        <div className="login-page">
            <Box component="form" className="login-page__form">
                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    margin="normal"/>

                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"/>

                <Button
                    type="submit"
                    variant="contained">
                    Submit
                </Button>
            </Box>
        </div>

    )
}

export default LoginPage
