import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

import '../css/regionalView.css'

import ClickableList from '../components/ClickableList'
import SearchBar from '../components/SearchBar'
import SurfbreakMap from '../components/SurfbreakMap'
import { getTopBreaks } from '../apis/databaseApi'
import { SurfbreakBasicInfo } from '../types'
import useGoogleMapsKey from '../hooks/useGoogleMapsKey'

export default function RegionalView() {
    const [surfbreakBasicInfo, setSurfbreakBasicInfo] = useState<SurfbreakBasicInfo[]>([])
    const key = useGoogleMapsKey()

    useEffect(() => {
        const getBreaks = async () => {
            const topBreaks = await getTopBreaks()
            setSurfbreakBasicInfo(topBreaks)
        }
        getBreaks()
    }, [])

    return (
        <div className='regionalView'>
            <section className='surfbreaksColumn'>
                <SearchBar />
                <ClickableList surfbreaks={surfbreakBasicInfo} />
                <Link to={'/surfbreaks/new'} className='suggestButton'>+ Suggest New Break</Link>
            </section>
            {!key ? (<p>Error Loading Map</p>) : (<SurfbreakMap surfbreaks={surfbreakBasicInfo} apiKey={key} />)}
        </div>
    )
}
