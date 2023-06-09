import express, { Express, Request, Response } from 'express';
import { config } from 'dotenv'
import cors from 'cors'
// import { v4 as uuid } from 'uuid'

import { log } from './middleware'
import * as db from './db/db'

config()

const port = 3000;
const app: Express = express();

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(log)
app.use(express.json())

app.get('/topbreaks', async (req: Request, res: Response) => {
    const { rows } = await db.query('SELECT * FROM surfbreak', [])

    const formattedRows = rows.map(e => {
        return {
            name: e.name,
            id: e.id,
            location: {
                region: e.region,
                coordinates: {
                    lat: Number(e.latitude),
                    lng: Number(e.longitude)
                }
            }
        }
    })

    res.send(formattedRows)
})

// app.get('/forecast/:id', (req: Request, res: Response) => {
//     let { id } = req.params
//     // TODO: Get from database.
//     res.send(fakeDb.forecasts[id])
// })

app.post('/surfbreak/new', async (req: Request, res: Response) => {
    // TODO: Persist the new surf break. That would require a database...
    const { name, region, lat, lng } = req.body

    // TODO: auto create uuid and maybe timestamp in db.
    const query = {
        text: 'INSERT INTO surfbreak(name, region, latitude, longitude) VALUES($1, $2, $3, $4)',
        values: [name, region, lat, lng]
    }

    const result = await db.query(query.text, query.values)

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
