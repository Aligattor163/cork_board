import {Router} from "express"
import {users} from "../data/users.mock";
import {Token, User} from "@shared/types/AppTypes";
import TokenService from "../services/token-service";
import tokenService from "../services/token-service";
import logger from "../middleware/logger.middleware";
import Routes from "@shared/Routes";
import delay from "../middleware/delay.middleware";

const authRoutes = Router()

authRoutes.post(Routes.authenticate, logger, delay(1000), (req, res) => {
    console.log("Authentication")
    const user: User = req.body as User;
    const userMail: string = user.email;
    const userPassword: string | undefined = user.password;
    const existingUser: User | undefined = users.find(user => user.email === userMail);

    if (existingUser) {
        console.log("User found")
        if (userPassword && existingUser.password === atob(userPassword)) {
            console.log("Password matches, creating token")
            res.json(TokenService.createToken(existingUser.id)).status(200) //auth success
            return;
        }
    }
    console.log("Authentication failed")
    res.sendStatus(401); //password is incorrect or user not found
})

authRoutes.post(Routes.logout, logger, (req, res) => {
    console.log("Logging out")
    const token: Token = req.body as Token;

    token && TokenService.deleteToken(token.value);
    res.sendStatus(200);
})

authRoutes.get(Routes.checkToken, logger, (req, res) => {
    const token: string = req.query.token as string;
    token && tokenService.checkToken(token) ? res.sendStatus(200) : res.sendStatus(401);
})

export default authRoutes
