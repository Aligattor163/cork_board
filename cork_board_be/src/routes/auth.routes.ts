import {Router} from "express"

const authRouter = Router()

authRouter.get("/v1/auth", (req, res) => {
    res.json({isAuthenticated: true}).status(200)
})

export default authRouter
