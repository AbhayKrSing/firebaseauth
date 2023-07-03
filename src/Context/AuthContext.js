import React, { useState } from 'react'
import { useContext, createContext } from 'react'
import { auth, createAUser } from '../firebase'
const authContext = createContext()
export const AuthContext = ({ children }) => {
    const [currentUser, setcurrentUser] = useState('')
    const signup = (email, password) => {
        return createAUser(auth, email, password)  //this return promise
    }
    const value = {
        currentUser,
        signup,
        setcurrentUser
    }
    return (
        <div>
            <authContext.Provider value={value}>{children}</authContext.Provider>
        </div>
    )
}
export const UseAuthContextAPI = () => {
    useContext(authContext)
}

