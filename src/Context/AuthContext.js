import React, { useState } from 'react'
import { useContext, createContext } from 'react'
import { auth, createAUser, OnAuthStateChange, SignInWithEmailAndPassword, SignOut, SendPasswordResetEmail, UpdateEmail, UpdatePassword } from '../firebase'
import { useToast } from '@chakra-ui/react'
const authContext = createContext()
export const AuthContext = ({ children }) => {
    const toast = useToast()
    function applyToast(message = 'Account created.', description = "We've created your account for you.", status, duration = 1000) {
        toast({
            title: message,
            description: description,
            status: status,
            duration: duration,
            isClosable: true,
        })
    }
    const [currentUser, setcurrentUser] = useState('')
    const signup = (email, password) => {  //signup
        return createAUser(auth, email, password)  //this return promise
    }
    const login = (email, password) => {   //login
        return SignInWithEmailAndPassword(auth, email, password)
    }
    const signout = () => {
        return SignOut(auth)
    }
    const resetpassword = (email) => {
        return SendPasswordResetEmail(auth, email)
    }
    const UpdateAnEmail = (newEmail) => {
        return UpdateEmail(currentUser, newEmail)
    }
    const UpdateAnPassword = (newpassword) => {
        return UpdatePassword(currentUser, newpassword)
    }
    const value = {
        currentUser,
        signup,
        setcurrentUser,
        OnAuthStateChange,
        auth,
        applyToast,
        login,
        signout,
        resetpassword,
        UpdateAnEmail,
        UpdateAnPassword
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

