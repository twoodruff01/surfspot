import { useEffect, useState } from "react"

import { getGoogleMapsApiKey } from "../apis/databaseApi"

export default function useGoogleMapsKey(): string {
    const [apiKey, setApiKey] = useState('')

    useEffect(() => {
        const getKey = async () => {
            const key: string = await getGoogleMapsApiKey()
            setApiKey(key)
        }
        getKey()
    }, [])

    return apiKey
}
