import { useEffect, useState } from "react"

export default function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const controller = new AbortController()
    useEffect(() => {
        loadData()
        return () => {
            controller.abort()
        }
    }, [])
    const loadData = async () => {
        try {
            setLoading(true)
            const rawData = await fetch(url, { signal: controller.signal });
            // const rawData = await fetch(url);
            const jsonData = await rawData.json()
            if (jsonData?.success && jsonData?.data) {
                setData(jsonData.data)
            }
        }
        catch (err) {
            setError("Something went Wrong")
        }
        finally {
            setLoading(false)
        }
    }

    return { data, loading, error, refetch:loadData }
}