import { useEffect, useState } from 'react'
import '../App.css'

import ClickableList from '../components/ClickableList'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import SurfbreakMap from '../components/SurfbreakMap'

import { SurfbreakBasicInfo, surfbreaks } from '../DummyData'

export default function App() {
    const [surfbreakBasicInfo, setSurfbreakBasicInfo] = useState<Array<SurfbreakBasicInfo>>([])

    useEffect(() => {
        // TODO: Fetch from server.
        setSurfbreakBasicInfo(surfbreaks)
    })

    return (
        <>
            <Navbar />
            <div>
                <div>
                    <SearchBar />
                    <ClickableList surfbreaks={surfbreakBasicInfo} />
                </div>
                <SurfbreakMap />
            </div>
        </>
    )
}
