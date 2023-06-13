import express, { Express, Request, Response } from 'express';
import cors from 'cors'

import { log } from './middleware'
import * as db from './db/db'
import * as forecastCache from './forecastCache'
import { SurfbreakBasicInfo } from './types';

forecastCache.setupForecastCache()

const port = 3000;
const app: Express = express();

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(log)
app.use(express.json())

app.get('/topbreaks', async (req: Request, res: Response) => {
    const { rows } = await db.query('SELECT * FROM surfbreak', [])

    const formattedRows: SurfbreakBasicInfo[] = rows.map(e => {
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

app.get('/surfbreak/:id', async (req: Request, res: Response) => {
    let { id } = req.params

    const { rows } = await db.query('SELECT * FROM surfbreak WHERE id = $1;', [id])

    const formattedRows: SurfbreakBasicInfo[] = rows.map(e => {
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

    if (formattedRows.length > 1) {
        console.log(`unexpected duplicate keys from database, how is that possible? id=${id}`)
    }

    res.send(formattedRows[0])
})

app.get('/forecast/:id', async (req: Request, res: Response) => {
    let { id } = req.params

    forecastCache.memcached.get(id, function (err, data) {
        if (err) {
            console.log(`forecast id=${id} had error=${err}`)
        }
        res.send(data)
    })
})

app.post('/surfbreak/new', async (req: Request, res: Response) => {
    const { name, region, lat, lng } = req.body

    const query = {
        text: 'INSERT INTO surfbreak(name, id, region, latitude, longitude, create_timestamp) VALUES($1, uuid_generate_v4(), $2, $3, $4, current_timestamp)',
        values: [name, region, lat, lng]
    }

    const result = await db.query(query.text, query.values)

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
