import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';

import '../css/surfbreakMap.css'

import { SurfbreakBasicInfo } from '../types';
import { useNavigate } from 'react-router-dom';

export const defaultMapCenter = {
    lat: -38.46929924935438,
    lng: 144.08390766343166
}

/**
 * Passing key in as a prop is not secure, this is a workaround because I don't know how else to do it and this app
 *  isn't actually being deployed.
 * TODO: Figure out how to avoid having the key on the frontend...
 */
export default function SurfbreakMap({ surfbreaks, apiKey }: { surfbreaks: Array<SurfbreakBasicInfo>, apiKey: string }) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: apiKey
    });

    const navigate = useNavigate()

    return (
        <section className='surfmapOverview'>
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <GoogleMap
                    mapContainerClassName="map-container"
                    center={defaultMapCenter}
                    zoom={10}
                >
                    {surfbreaks.map((e) => (
                        <MarkerF position={e.location.coordinates} onClick={() => navigate(`/surfbreaks/${e.id}`)} icon={'./surfBarrel-modified.ico'} key={e.id} />
                    ))}
                </GoogleMap>
            )}
        </section>
    )
}
