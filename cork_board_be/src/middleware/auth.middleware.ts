import {NextFunction, Request, Response} from "express"
import TokenService from "../services/token-service";

export default function auth(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const token = req.headers.authorization;
    if (!token || !TokenService.checkToken(token)) {
        return res.status(401).json({message: "Unauthorized"})
    }
    next()
}
