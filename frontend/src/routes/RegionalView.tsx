import { useEffect, useState } from 'react'

import '../css/regionalView.css'
import '../css/surfbreakMap.css'

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
        <>
            <div className='regionalView'>
                <section>
                    <SearchBar />
                    <ClickableList surfbreaks={surfbreakBasicInfo} />
                </section>
                {!key ? (<div className='surfMapOverview'></div>) : (<SurfbreakMap surfbreaks={surfbreakBasicInfo} apiKey={key} />)}
            </div>
        </>
    )
}
