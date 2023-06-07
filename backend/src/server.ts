import express, { Express, NextFunction, Request, Response } from 'express';
import { config } from 'dotenv'
// import { v4 as uuid } from 'uuid'

import { fakeDb } from './fakeDb';

config()

const app: Express = express();
const port = 3000;

function headers(req: Request, res: Response, next: NextFunction) {
    res.set('Access-Control-Allow-Origin', 'http://localhost:5173')
    res.setHeader('Content-Type', 'application/json')
    next()
}

function log(req: Request, res: Response, next: NextFunction) {
    console.log(`${req.method} ${req.url}`)
    next()
}

app.get('/topbreaks', headers, log, (req: Request, res: Response) => {
    res.end(JSON.stringify(fakeDb.breaks))
});

app.get('/forecast/:id', headers, log, (req: Request, res: Response) => {
    let { id } = req.params
    res.end(JSON.stringify(fakeDb.forecasts[id]))
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});
