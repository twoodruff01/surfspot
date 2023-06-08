import express, { Express, Request, Response } from 'express';
import { config } from 'dotenv'
import cors from 'cors'
// import { v4 as uuid } from 'uuid'

import { log } from './middleware'
import { fakeDb } from './fakeDb';

config()

const port = 3000;
const app: Express = express();

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(log)
app.use(express.json())

app.get('/topbreaks', (req: Request, res: Response) => {
    res.send(fakeDb.breaks)
})

app.get('/forecast/:id', (req: Request, res: Response) => {
    let { id } = req.params
    res.send(fakeDb.forecasts[id])
})

app.post('/surfbreak/new', (req: Request, res: Response) => {
    // TODO: Persist the new surf break. That would require a database...
    console.log(req.body)
    res.status(200).send('OK')
})

/**
 * This is a workaround to avoid storing the key on the client side.
 * I'm not sure how you would do it properly if you actually deployed this app,
 *  but it wouldn't be this way...
 */
app.get('/googleMapsApiKey', log, (req: Request, res: Response) => {
    res.send(process.env['GOOGLE_MAPS_API_KEY'])
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
