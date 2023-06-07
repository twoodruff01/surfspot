import { Link } from "react-router-dom"
import { SurfbreakBasicInfo } from "../DummyData"

import '../css/clickableList.css'

export default function ClickableList({ surfbreaks }: { surfbreaks: Array<SurfbreakBasicInfo> }) {

    return (
        <ul>
            {surfbreaks.map(e => {
                return <li key={e.id} className="clickableListItem">
                    <Link to={`surfbreaks/${e.id}`}>
                        {e.name}
                    </Link>
                </li>
            })}
        </ul>
    )
}
