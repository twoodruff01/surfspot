import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import './index.css'

import App from './routes/App.tsx'
import ErrorPage from './routes/ErrorPage.tsx'
import Surfbreak, {
    loader as surfbreakLoader
} from './routes/Surfbreak.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: 'surfbreaks/:surfbreakId',
        element: <Surfbreak />,
        loader: surfbreakLoader
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
