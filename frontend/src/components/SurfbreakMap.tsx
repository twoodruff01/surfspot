import { GoogleMap, Marker, MarkerF, useLoadScript } from '@react-google-maps/api';

import '../css/surfbreakMap.css'

import { SurfbreakBasicInfo } from '../types';
import { useNavigate } from 'react-router-dom';

export default function SurfbreakMap({ surfbreaks }: { surfbreaks: Array<SurfbreakBasicInfo> }) {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "playing_with_fire"
    });

    const navigate = useNavigate()

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
                >
                    {surfbreaks.map((e) => (
                        <MarkerF position={e.location.coordinates} onClick={() => navigate(`/surfbreaks/${e.id}`)} icon={'./surfBarrel-modified.ico'} key={e.id} />
                    ))}
                </GoogleMap>
            )}
        </div>
    )
}
