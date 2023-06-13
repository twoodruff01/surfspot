import axios from "axios";

import { Forecast, NewSurfbreakForm, SurfbreakBasicInfo } from "../types";

const instance = axios.create({
    baseURL: 'http://localhost:3000',
});

/**
 * Get a list of top surf breaks. Would be truncated for bigger application obvs.
 */
export async function getTopBreaks(): Promise<SurfbreakBasicInfo[]> {
    const res = await instance.get('/topbreaks');
    return res.data
}

export async function getBreak(id: string): Promise<SurfbreakBasicInfo> {
    const res = await instance.get(`/surfbreak/${id}`)
    return res.data
}

/**
 * Get forecast for this surf break Id.
 */
export async function getForecast(id: string): Promise<Forecast> {
    const res = await instance.get(`/forecast/${id}`);
    console.log('oi')
    console.log(res.data)
    return res.data
}

/**
 * Not secure.
 */
export async function getGoogleMapsApiKey(): Promise<string> {
    const res = await instance.get('/googleMapsApiKey');
    return res.data
}

export async function postNewSurfbreak(formData: NewSurfbreakForm) {
    await instance.post('/surfbreak/new', formData)
}
