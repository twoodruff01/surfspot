import express, { Express, Request, Response } from 'express';
import { config } from 'dotenv'
// import { v4 as uuid } from 'uuid'

import { fakeDb } from './fakeDb';

config()

const app: Express = express();
const port = 3000;

function setupRes(res: Response) {
    // res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.setHeader('Content-Type', 'application/json')
    return res
}

app.get('/topbreaks', (req: Request, res: Response) => {
    setupRes(res).end(JSON.stringify(fakeDb.breaks))
});

app.get('/forecast/:id', (req: Request, res: Response) => {
    let { id } = req.params
    setupRes(res).send(JSON.stringify(fakeDb.forecasts[id]))
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});
