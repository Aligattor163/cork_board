import {NextFunction, Request, Response} from "express"

export default function logger(
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.log(`Request: ${req.method} ${req.originalUrl} Body:`)
    console.log(req.body)
    next()
}
