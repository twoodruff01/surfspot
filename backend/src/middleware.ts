import { NextFunction, Request, Response } from 'express';

export function log(req: Request, res: Response, next: NextFunction) {
    console.log(`${req.method} ${req.url}`)
    next()
}
