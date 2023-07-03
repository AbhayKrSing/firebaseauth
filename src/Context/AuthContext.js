import React from 'react'
import { useContext, createContext } from 'react'

const authContext = createContext()

const value = {

}
export const AuthContext = ({ children }) => {
    return (
        <div>
            <authContext.Provider value={value}>{children}</authContext.Provider>
        </div>
    )
}
export const UseAuthContextAPI = () => {
    useContext(authContext)
}

