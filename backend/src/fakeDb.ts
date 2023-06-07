import { FakeDb, Forecast, SurfbreakBasicInfo, SurfbreakDetailedForecast } from "./types"

export const surfbreaks: SurfbreakBasicInfo[] = [
]

const genericForecast: Forecast = {
    labels: [
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
    windSpeed: [
        22, 22, 23,
        15, 17, 18,
        18, 26, 28,
        10, 10, 11,
        9, 9, 7,
        5, 10, 15,
        15, 16, 13,
        14, 19, 17
    ],
    windDirection: [
    ],
    tide: [
    ]
}

const fairhaven: SurfbreakDetailedForecast = {
    basicInfo: {
        id: '9a639a57-aef1-4d43-a2fb-45ce4b99219c',
        name: 'Fairhaven',
        location: {
            region: 'Surf Coast',
            coordinates: {
                lat: -38.46929924935438,
                lng: 144.08390766343166
            }
        },
    },
    forecast: genericForecast
}

const lornepoint: SurfbreakDetailedForecast = {
    basicInfo: {
        id: 'eba7ed74-1cc2-4b3a-a472-6bb971a3d778',
        name: 'Lorne Point',
        location: {
            region: 'Surf Coast',
            coordinates: {
                lat: -38.542733,
                lng: 143.979457
            }
        },
    },
    forecast: genericForecast
}

const bells: SurfbreakDetailedForecast = {
    basicInfo: {
        id: '11ef0462-1f09-4d2f-9c43-8ba61ef31b7f',
        name: 'Bells Beach',
        location: {
            region: 'Surf Coast',
            coordinates: {
                lat: -38.371725,
                lng: 144.283352
            }
        },
    },
    forecast: genericForecast
}

const winki: SurfbreakDetailedForecast = {
    basicInfo: {
        id: 'ad131f93-a07d-4549-acda-a3762a665c6d',
        name: 'Winki Pop',
        location: {
            region: 'Surf Coast',
            coordinates: {
                lat: -38.368730,
                lng: 144.286120
            }
        },
    },
    forecast: genericForecast
}

const wye: SurfbreakDetailedForecast = {
    basicInfo: {
        id: '7b682dd7-2a6b-4b01-9d79-308d2d12f04d',
        name: 'Wye River',
        location: {
            region: 'Surf Coast',
            coordinates: {
                lat: -38.637388,
                lng: 143.894694
            }
        },
    },
    forecast: genericForecast
}

const eastern: SurfbreakDetailedForecast = {
    basicInfo: {
        id: 'eaf150fa-63d3-461b-bf2d-2e528eeb05dd',
        name: 'Eastern View',
        location: {
            region: 'Surf Coast',
            coordinates: {
                lat: -38.473016,
                lng: 144.058364
            }
        },
    },
    forecast: genericForecast
}

export const fakeDb: FakeDb = {
    forecasts: {
        '9a639a57-aef1-4d43-a2fb-45ce4b99219c': fairhaven,
        'eba7ed74-1cc2-4b3a-a472-6bb971a3d778': lornepoint,
        '11ef0462-1f09-4d2f-9c43-8ba61ef31b7f': bells,
        'ad131f93-a07d-4549-acda-a3762a665c6d': winki,
        '7b682dd7-2a6b-4b01-9d79-308d2d12f04d': wye,
        'eaf150fa-63d3-461b-bf2d-2e528eeb05dd': eastern,
    },
    breaks: [
        {
            id: '9a639a57-aef1-4d43-a2fb-45ce4b99219c',
            name: 'Fairhaven',
            location: {
                region: 'Surf Coast',
                coordinates: {
                    lat: -38.46929924935438,
                    lng: 144.08390766343166
                }
            },
        },
        {
            id: 'eba7ed74-1cc2-4b3a-a472-6bb971a3d778',
            name: 'Lorne Point',
            location: {
                region: 'Surf Coast',
                coordinates: {
                    lat: -38.542733,
                    lng: 143.979457
                }
            },
        },
        {
            id: '11ef0462-1f09-4d2f-9c43-8ba61ef31b7f',
            name: 'Bells Beach',
            location: {
                region: 'Surf Coast',
                coordinates: {
                    lat: -38.371725,
                    lng: 144.283352
                }
            },
        },
        {
            id: 'ad131f93-a07d-4549-acda-a3762a665c6d',
            name: 'Winki Pop',
            location: {
                region: 'Surf Coast',
                coordinates: {
                    lat: -38.368730,
                    lng: 144.286120
                }
            },
        },
        {
            id: '7b682dd7-2a6b-4b01-9d79-308d2d12f04d',
            name: 'Wye River',
            location: {
                region: 'Surf Coast',
                coordinates: {
                    lat: -38.637388,
                    lng: 143.894694
                }
            },
        },
        {
            id: 'eaf150fa-63d3-461b-bf2d-2e528eeb05dd',
            name: 'Eastern View',
            location: {
                region: 'Surf Coast',
                coordinates: {
                    lat: -38.473016,
                    lng: 144.058364
                }
            },
        }
    ]
}
