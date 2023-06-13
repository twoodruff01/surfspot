import { useLoaderData } from "react-router-dom";
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import '../css/surfbreak.css'
import { SurfbreakDetailedForecast } from "../types";
import { getBreak, getForecast } from "../apis/databaseApi";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

/**
 * This is meant to pull the uuid for the surfbreak out of the url:
 *  /surfbreaks/:id
 */
export async function loader({ params }: { params: any }): Promise<SurfbreakDetailedForecast> {  // Typescript support from react-router-dom seems terrible.
    return {
        basicInfo: await getBreak(params.surfbreakId),
        forecast: await getForecast(params.surfbreakId)
    }
}

export default function SurfBreak() {
    const detailedForecast = useLoaderData() as SurfbreakDetailedForecast

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: false,
                text: 'Chart.js Line Chart',
            },
        },
    };

    const labels = detailedForecast.forecast.labels

    const data1 = {
        labels,
        datasets: [
            {
                label: 'Period',
                data: detailedForecast.forecast.periods,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Height',
                data: detailedForecast.forecast.heights,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    }

    const data2 = {
        labels,
        datasets: [
            {
                label: 'Wind Speed',
                data: detailedForecast.forecast.windSpeed,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    }

    return (
        <div className="surfbreakContainer">
            <h1>{detailedForecast.basicInfo.name}</h1>
            <div className="chartDiv">
                <Line options={options} data={data1} />
            </div>
            <div className="chartDiv">
                <Line options={options} data={data2} />
            </div>
        </div>
    )
}
