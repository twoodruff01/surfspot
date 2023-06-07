export interface SurfbreakDetailedForecast {
    basicInfo: SurfbreakBasicInfo,
    location: {
        region: string,
        coordinates: Point
    },
    forecast: Forecast
}

export interface SurfbreakBasicInfo {
    name: string
    id: string,  // No type support... should be a uuid
}

export interface Point {
    latitude: number,
    longitude: number
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
