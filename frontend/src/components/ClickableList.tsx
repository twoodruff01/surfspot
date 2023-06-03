import { Link } from "react-router-dom"
import { SurfbreakBasicInfo } from "../DummyData"

export default function ClickableList({ surfbreaks }: { surfbreaks: Array<SurfbreakBasicInfo> }) {

    return (
        <ul>
            {surfbreaks.map(e => {
                return <li key={e.id}>
                    <Link to={`surfbreaks/${e.id}`}>
                        {e.name}
                    </Link>
                </li>
            })}
        </ul>
    )
}
