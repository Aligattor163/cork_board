import {Router} from "express"
import {users} from "../data/users.mock";
import {User} from "@shared/types/AppTypes";

const authRouter = Router()

authRouter.post("/v1/auth", (req, res) => {
    const userMail = req.body.mail;
    const userPassword = req.body.password;
    const existingUser: User | undefined = users.find(user => user.email === userMail);

    if (existingUser) {
        if (existingUser.password === userPassword) {
            res.json(existingUser).status(200) //auth success
            return;
        }
    }
    res.status(401); //password is incorrect or user not found
})

export default authRouter
