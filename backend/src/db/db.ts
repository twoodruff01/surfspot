import { Pool } from 'pg'
import { config } from 'dotenv'

config()

const pool: Pool = new Pool({
    user: process.env['POSTGRES_USER'],
    password: process.env['POSTGRES_PASSWORD'],
    port: Number(process.env['POSTGRES_PORT'])
})

export const query = (text: string, values?: string[]) => pool.query(text, values);
