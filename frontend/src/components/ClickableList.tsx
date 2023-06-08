import { Link } from "react-router-dom"

import '../css/clickableList.css'

import { SurfbreakBasicInfo } from "../types"

export default function ClickableList({ surfbreaks }: { surfbreaks: Array<SurfbreakBasicInfo> }) {

    return (
        <div className="clickableList">
            {surfbreaks.map(e => {
                return <Link to={`surfbreaks/${e.id}`} className="clickableListItem" key={e.id}>
                    {e.name}
                </Link>
            })}
        </div>
    )
}
