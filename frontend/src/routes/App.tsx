import { useEffect, useState } from 'react'
import '../css/app.css'

import ClickableList from '../components/ClickableList'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import SurfbreakMap from '../components/SurfbreakMap'

import { SurfbreakBasicInfo, surfbreaks } from '../DummyData'
import Footer from '../components/Footer'

export default function App() {
    const [surfbreakBasicInfo, setSurfbreakBasicInfo] = useState<Array<SurfbreakBasicInfo>>([])

    useEffect(() => {
        // TODO: Fetch from server.
        setSurfbreakBasicInfo(surfbreaks)
    })

    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className='regionalView'>
                <section>
                    <SearchBar />
                    <ClickableList surfbreaks={surfbreakBasicInfo} />
                </section>
                <SurfbreakMap />
            </main>
            <Footer />
        </>
    )
}
