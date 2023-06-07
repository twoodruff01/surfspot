import { useEffect, useState } from 'react'

import '../css/regionalView.css'

import ClickableList from '../components/ClickableList'
import SearchBar from '../components/SearchBar'
import SurfbreakMap from '../components/SurfbreakMap'

import { SurfbreakBasicInfo, surfbreaks } from '../DummyData'


export default function RegionalView() {
    const [surfbreakBasicInfo, setSurfbreakBasicInfo] = useState<Array<SurfbreakBasicInfo>>([])

    useEffect(() => {
        // TODO: Fetch from server.
        setSurfbreakBasicInfo(surfbreaks)
    })

    return (
        <>
            <div className='regionalView'>
                <section>
                    <SearchBar />
                    <ClickableList surfbreaks={surfbreakBasicInfo} />
                </section>
                <SurfbreakMap />
            </div>
        </>
    )
}
