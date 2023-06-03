export interface SurfbreakBasicInfo {
    id: number,
    name: string
}

export interface SurfbreakDetailedForecast {
    basicInfo: SurfbreakBasicInfo,
    forecast: {
        timescale: Array<string>,
        periods: Array<number>,
        directions: Array<number>,
        heights: Array<number>,
        windSpeed: Array<number>,
        windDirection: Array<number>,
        tide: Array<number>
    }
}

export const surfbreaks: SurfbreakBasicInfo[] = [
    { id: 1, name: 'Bells Beach' },
    { id: 2, name: 'Fairhaven' },
    { id: 3, name: 'Lorne Point' },
    { id: 4, name: 'Winki Pop' },
    { id: 5, name: 'Southside' },
    { id: 6, name: 'Eastern View' },
    { id: 7, name: 'Boneyards' }
]

export const bells: SurfbreakDetailedForecast = {
    basicInfo: {
        id: 1,
        name: 'Bells Beach',
    },
    forecast: {
        timescale: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
            'Monday'
        ],
        periods: [
            12, 12, 13,
            13, 13, 13,
            15, 16, 18,
            17, 14, 13,
            12, 12, 12,
            12, 12, 12,
            11, 12, 13,
            14, 15, 15
        ],
        directions: [
            233, 232, 231,
            234, 232, 231,
            233, 232, 231,
            233, 232, 231,
            232, 232, 231,
            233, 233, 233,
            234, 234, 234,
            231, 232, 231,
        ],
        heights: [
            1.0, 1.5, 1.5,
            2.0, 2.5, 2.5,
            2.5, 2.5, 2.5,
            2.5, 3.5, 3.5,
            3.5, 2.5, 2.5,
            2.5, 2.5, 2.5,
            1.5, 2.5, 2.5,
            2.5, 2.5, 2.5,
        ],
        windSpeed: [

        ],
        windDirection: [

        ],
        tide: [

        ]
    }
}
