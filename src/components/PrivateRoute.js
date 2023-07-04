import React from 'react'
import { UseAuthContextAPI } from '../Context/AuthContext'
import Login from './Login'
const PrivateRoute = ({ children }) => {

    const { currentUser } = UseAuthContextAPI()
    return (
        <>
            {currentUser ? (children) : <Login>
                <br />
                <br />
                <br />
            </Login>}
        </>
    )
}

export default PrivateRoute
