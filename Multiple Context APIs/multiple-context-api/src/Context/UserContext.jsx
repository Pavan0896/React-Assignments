import React, { createContext, useState } from 'react'

const userContext = createContext();

const UserProvider = ({children})=>{
    const [auth, setAuth] = useState(false)
    return <userContext.Provider value={{auth,setAuth}}>
               {children}
            </userContext.Provider>
}

export {userContext, UserProvider}
