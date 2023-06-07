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

import { SurfbreakDetailedForecast, bells } from "../DummyData";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export async function loader({ params }: { params: any }) {  // Typescript support from react-router-dom seems terrible.
    const surfbreakDetailedForecast = await getSurfBreakDetails(params.surfbreakId)
    return surfbreakDetailedForecast
}

async function getSurfBreakDetails(id: number): Promise<SurfbreakDetailedForecast> {
    // TODO: Fetch forecast data for this ID from server
    console.log(`id from url: ${id}`)
    return bells
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

    const labels = detailedForecast.forecast.timescale

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
