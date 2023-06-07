import axios from "axios";
import { SurfbreakBasicInfo, SurfbreakDetailedForecast } from "../types";

const instance = axios.create({
    baseURL: 'http://localhost:3000',
});

/**
 * Get a list of top surf breaks. Would be truncated for bigger application obvs.
 */
export async function getTopBreaks(): Promise<SurfbreakBasicInfo[]> {
    const res = await instance.get("/topbreaks");
    return res.data
}

/**
 * Get forecast for this surf break Id.
 */
export async function getForecast(id: string): Promise<SurfbreakDetailedForecast> {
    const res = await instance.get(`/forecast/${id}`);
    return res.data
}
