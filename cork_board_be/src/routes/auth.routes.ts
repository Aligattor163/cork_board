import {Router} from "express"
import {users} from "../data/users.mock";
import {User} from "@shared/types/AppTypes";
import TokenService from "../services/token-service";
import tokenService from "../services/token-service";
import logger from "../middleware/logger.middleware";
import Routes from "@shared/Routes";

const authRouter = Router()

authRouter.post(Routes.authenticate, logger, (req, res) => {
    const user: User = req.body as User;
    const userMail: string = user.email;
    const userPassword: string | undefined = user.password;
    const existingUser: User | undefined = users.find(user => user.email === userMail);

    if (existingUser) {
        if (userPassword && existingUser.password === atob(userPassword)) {
            res.json(TokenService.createToken(existingUser.id)).status(200) //auth success
            return;
        }
    }
    res.sendStatus(401); //password is incorrect or user not found
})

authRouter.get(Routes.checkToken, logger, (req, res) => {
    const token: string = req.query.token as string;
    token && tokenService.checkToken(token) ? res.sendStatus(200) : res.sendStatus(401);
})

export default authRouter
