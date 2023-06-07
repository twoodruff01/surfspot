import { Link } from 'react-router-dom'

import '../css/navbar.css'

export default function Navbar() {
    return (
        <header>
            <nav>
                <Link to={'/'} className='navLink'>Home</Link>
                <h1>surfspot</h1>
                <Link to={'/'} className='navLink'>Logout</Link>
            </nav>
        </header>
    )
}
