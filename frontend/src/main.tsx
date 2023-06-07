import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import './css/normalize.css'
import './css/index.css'

import Root from './routes/Root.tsx';
import ErrorPage from './routes/ErrorPage.tsx'
import RegionalView from './routes/RegionalView.tsx';
import Surfbreak, {
    loader as surfbreakLoader
} from './routes/Surfbreak.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <RegionalView />
            },
            {
                path: 'surfbreaks/:surfbreakId',
                element: <Surfbreak />,
                loader: surfbreakLoader
            }
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
