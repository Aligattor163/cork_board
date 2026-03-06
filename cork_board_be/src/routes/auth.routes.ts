import {Router} from "express"
import {users} from "../data/users.mock";
import {User} from "@shared/types/AppTypes";
import TokenService from "../services/token-service";
import logger from "../middleware/logger.middleware";
import Routes from "@shared/Routes";

const authRouter = Router()

authRouter.post(Routes.authenticate, logger, (req, res) => {
    const userMail = req.body.mail;
    const userPassword = req.body.password;
    const existingUser: User | undefined = users.find(user => user.email === userMail);

    if (existingUser) {
        if (existingUser.password === userPassword) {
            res.json(TokenService.createToken(existingUser.id)).status(200) //auth success
            return;
        }
    }
    res.status(401); //password is incorrect or user not found
})

export default authRouter
