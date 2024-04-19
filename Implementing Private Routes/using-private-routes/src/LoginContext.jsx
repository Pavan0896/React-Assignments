import React, { createContext, useState } from 'react'

const loginContext = createContext()

const LoginContextProvider = ({children})=>{

    const [auth, setAuth] = useState(false)
    return (
    <loginContext.Provider value={{auth, setAuth}}>
        {children}
    </loginContext.Provider>
    )
}
 
export {loginContext, LoginContextProvider}