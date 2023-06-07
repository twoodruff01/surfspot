import { GoogleMap, useLoadScript } from '@react-google-maps/api';

import '../css/surfbreakMap.css'

export default function SurfbreakMap() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "playing_with_fire"
    });

    const center = {
        lat: -38.46929924935438,
        lng: 144.08390766343166
    }

    return (
        <div className='surfmapOverview'>
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <GoogleMap
                    mapContainerClassName="map-container"
                    center={center}
                    zoom={10}
                />
            )}
        </div>
    )
}
