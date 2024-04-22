import {useState, useEffect} from 'react'

//4 - custom hooks
export const useFetch = (url) =>{
    const [data, setData] = useState(null)
    useEffect(( )=>{
        const fetechData = async()=>{
            const res = await fetch(url)
            const json= await res.json()
            setData(json)
        }
        fetechData();
    }, [url])
    return {data}
};