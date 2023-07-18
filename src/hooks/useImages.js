import axios from "axios";
import { useEffect, useState } from "react"

const useImages = (param) => {
    const [response, setResponse] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    axios.defaults.baseURL = 'https://pixabay.com/api/';

    const fetchData = async (url) => {
        try {
            setIsLoading(true);
            const res = await axios(url);
            setResponse(res.data.hits);
        } catch(err) {
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData(param);
    }, [param])

    return {
        response,
        isLoading,
        error,
        fetchData: url => fetchData(url)
    }
}

export default useImages