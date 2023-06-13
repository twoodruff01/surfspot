import Memcached from 'memcached'

import { Forecast } from "./types"

export const memcached = new Memcached('localhost:11211')

/*
Hard-coding the forecasts and then putting them into memcached might
 seem a bit ridiculous, but it's one step closer to not having to hard-code things.
*/
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

const forecastIds = [
    'ad131f93-a07d-4549-acda-a3762a665c6d',
    '11ef0462-1f09-4d2f-9c43-8ba61ef31b7f',
    '98b7e5b5-78bf-4807-9af5-f5ca1db51fbe',
    'eaf150fa-63d3-461b-bf2d-2e528eeb05dd',
    'eba7ed74-1cc2-4b3a-a472-6bb971a3d778',
    '7b682dd7-2a6b-4b01-9d79-308d2d12f04d'
]

export function setupForecastCache() {
    const jsonForecast = JSON.stringify(genericForecast)
    forecastIds.forEach(id => {
        memcached.set(id, jsonForecast, 0, function (err) {
            if (err) {
                console.log(`forecast id=${id} had error=${err}`)
            }
        })
    })
}
