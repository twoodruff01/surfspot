import { useState } from "react"
import { useNavigate } from "react-router-dom"

import '../css/suggestSurfBreak.css'

import { postNewSurfbreak } from "../apis/databaseApi"
import { NewSurfbreakForm } from "../types"
import Radio from "../components/Radio"
import LocationPickerMap from "../components/LocationPickerMap"
import useGoogleMapsKey from "../hooks/useGoogleMapsKey"
import { defaultMapCenter } from "../components/SurfbreakMap"

export default function SuggestSurfbreak() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState<NewSurfbreakForm>({
        name: '',
        region: '',
        lat: defaultMapCenter.lat,
        lng: defaultMapCenter.lng
    })
    const key = useGoogleMapsKey()

    function handleChange(e: any) {
        const { name, value } = e.target

        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function updateLocation(e: google.maps.MapMouseEvent): void {
        setFormData(prevData => {
            return {
                ...prevData,
                ['lat']: e.latLng?.lat(),
                ['lng']: e.latLng?.lng()
            }
        })
    }

    async function handleSubmit(e: any) {
        e.preventDefault()
        if (formData.lat === defaultMapCenter.lat && formData.lng === defaultMapCenter.lng) {
            alert('Please drag the map icon to where your new surf break is')
            return
        }
        postNewSurfbreak(formData)  // Don't need to await this, just yeet it into the void.
        alert('Suggestion Received!')
        navigate('/')
    }

    return (
        <>
            <div className="suggestionFormWrapper">

                <form action="/surfbreaks/new" method="POST" onSubmit={handleSubmit} className="suggestForm">
                    <div className="surfbreakName">
                        <label htmlFor="name">Surf Break Name</label>
                        <input type="text" value={formData.name} onChange={handleChange} name="name" id="name" required />
                    </div>

                    <fieldset className="regionRadios">
                        <Radio htmlFor="surfcoast" text="Surf Coast" value="Surf Coast" onChange={handleChange} name="region" required={true} />
                        <Radio htmlFor="other" text="Other" value="Other" onChange={handleChange} name="region" required={true} />
                    </fieldset>

                    <button type="submit">Submit</button>

                </form>
                <div className="mapWrapper">
                    {!key ? (<p>Error Loading Map</p>) : (<LocationPickerMap locationUpdater={updateLocation} apiKey={key} />)}
                </div>
            </div>
        </>
    )
}
