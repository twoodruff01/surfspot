export interface SurfbreakDetailedForecast {
    basicInfo: SurfbreakBasicInfo,
    forecast: Forecast
}

export interface SurfbreakBasicInfo {
    name: string
    id: string,  // No type support... should be a uuid
    location: {
        region: string,
        coordinates: Point
    }
}

export interface Point {
    lat: number,
    lng: number
}

export interface Forecast {
    labels: string[],
    periods: number[],
    heights: number[],
    directions: number[]
    windSpeed: number[],
    windDirection: number[],
    tide: number[]
}

export type Forecasts = {
    [key: string]: SurfbreakDetailedForecast
}

export interface NewSurfbreakForm {
    name: string,
    region: string,
    lat: number,
    lng: number
}
