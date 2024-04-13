import { useEffect, useState } from "react"

const useFetch = (url) => {
    /**
     * custom hook to fetch data stored remotely.
     * @param {String} url url to fetch data from
     */
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        // AbortController in case of the page unloading before the fetch completes
        const abortController = new AbortController()
        fetch(url, {signal:abortController.signal})
            .then(res => {
                if (!res.ok) {
                    throw Error('Failed fetching data')
                }
                return res.json()
            })
            .then(data =>{
                setData(data)
                setIsPending(false)
            })
            .catch((e) => {
                if (e.name === 'AbortError') {
                    console.log('aborted')
                } else {
                    setError(e.message)
                    setIsPending(false)
                }
            })

        return () => abortController.abort()
    }, [url])
    return {data, isPending, error}
}
 
export default useFetch;