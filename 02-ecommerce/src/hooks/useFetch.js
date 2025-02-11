
import { useCallback, useContext, useEffect, useState } from 'react'
import { FilterContext } from '../context/FilterContext'

const urli = 'https://api.escuelajs.co/api/v1/products/'
// const urli = 'https://api.escuelajs.co/api/v1/categories'

const useFetch = () => {

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(urli)

    useEffect(() => {
        fetch(url).then((response) => response.json()).then(
            (datita) => {
                setData(datita)
            }
        )
    }, [url])

    return { data, error, setUrl }

}

export default useFetch
