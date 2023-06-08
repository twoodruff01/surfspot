import '../css/radioContainer.css'

export default function Radio({ htmlFor, text, value, onChange, name, required }: { htmlFor: string, text: string, value: string, onChange: (e: any) => void, name: string, required: boolean }) {
    return (
        <div className="radioContainer">
            <label htmlFor={htmlFor}>{text}</label>
            {required ?
                (<input type="radio" value={value} onChange={onChange} name={name} id={htmlFor} required />) :
                (<input type="radio" value={value} onChange={onChange} name={name} id={htmlFor} />)
            }
        </div>
    )
}
