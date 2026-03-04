import {NextFunction, Request, Response} from "express"

export default function errorMiddleware(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.error("ERROR:", err)
    res.status(500).json({message: "Mock server error"})
}
