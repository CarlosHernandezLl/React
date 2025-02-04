
import { useCallback, useEffect, useState } from 'react'

const useFetch = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    // const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValu}`
    const url = 'https://api.escuelajs.co/api/v1/products'

    useEffect(() => {
        fetch(url).then((response) => response.json()).then((dat) => setData(dat))
    }, [url])

    return { data }

}

export default useFetch
