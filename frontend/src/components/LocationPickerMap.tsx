import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';

import '../css/surfbreakMap.css'

import { defaultMapCenter } from './SurfbreakMap';

/**
 * Passing key in as a prop is not secure, this is a workaround because I don't know how else to do it and this app
 *  isn't actually being deployed.
 * TODO: Figure out how to avoid having the key on the frontend...
 */
export default function LocationPickerMap({ locationUpdater, apiKey }: { locationUpdater: (e: google.maps.MapMouseEvent) => void, apiKey: string }) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: apiKey
    });

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
                    <MarkerF position={defaultMapCenter} draggable={true} onDragEnd={locationUpdater} icon={'../arrow-down.svg'} />
                </GoogleMap>
            )}
        </section>
    )
}
