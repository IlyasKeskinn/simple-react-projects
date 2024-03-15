import { useState, useEffect } from "react"

const useFetch = (url, method="GET") => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("")
    const [options, setOptions] = useState(null);


    const postData = (data) => {
        setOptions({
            "method" : "POST",
            "headers": {
                "Content-type" : "application/json"
            },
            "body" : JSON.stringify(data)
        })
    }

    useEffect(() => {
        const fetchData = async (options) => {
            setLoading(true);
            try {
                const response = await fetch(url,{...options});
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                const data = await response.json();
                setLoading(false)
                setData(data);
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }
        };
        if (method === "GET") {
            fetchData();
        }
        if (method ==="POST" && options) {
            fetchData(options);
        }
    }, [url,method,options]);

    return {
        data,
        isLoading,
        error,
        postData
    }
}

export default useFetch;