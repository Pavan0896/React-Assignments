import React, { createContext, useEffect, useState } from 'react'

const fetchAPIContext = createContext();

const FetchContext = ({children})=>{
    const [prod, setProd] = useState([]);
    const [details, setDetails] = useState({})
    useEffect(()=>{
       const getData = async ()=>{
        let a = await fetch("https://fakestoreapi.com/products");
        let b = await a.json();
        setProd(b);
       }
       getData()

    },[])
    return (
        <fetchAPIContext.Provider value={{prod, setProd, details, setDetails}}>
            {children}
        </fetchAPIContext.Provider>
    )
}

export {fetchAPIContext, FetchContext}
