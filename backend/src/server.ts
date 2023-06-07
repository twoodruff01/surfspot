import express, { Express, Request, Response } from 'express';
import { config } from 'dotenv'

config()

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Server is running.');
});

app.get('/getSomething', (req: Request, res: Response) => {
    console.log('get request')
    res.set('Access-Control-Allow-Origin', '*')
    // res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ key: 'something' }));
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
