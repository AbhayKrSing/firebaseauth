import React, { useState } from 'react'
import { useContext, createContext } from 'react'
import { auth, createAUser, OnAuthStateChange, SignInWithEmailAndPassword } from '../firebase'
import { useToast } from '@chakra-ui/react'
const authContext = createContext()
export const AuthContext = ({ children }) => {
    const toast = useToast()
    function applyToast(message = 'Account created.', description = "We've created your account for you.", status) {
        toast({
            title: message,
            description: description,
            status: status,
            duration: 1000,
            isClosable: true,
        })
    }
    const [currentUser, setcurrentUser] = useState('')
    const signup = (email, password) => {
        return createAUser(auth, email, password)  //this return promise
    }
    const login = (email, password) => {
        return SignInWithEmailAndPassword(auth, email, password)
    }
    const value = {
        currentUser,
        signup,
        setcurrentUser,
        OnAuthStateChange,
        auth,
        applyToast,
        login
    }
    return (
        <div>
            <authContext.Provider value={value}>{children}</authContext.Provider>
        </div>
    )
}
export const UseAuthContextAPI = () => {
    return useContext(authContext)
}

