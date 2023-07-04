import React, { useEffect, useRef, useState } from 'react'
import { FormControl, FormLabel, Input, Container, Heading, Box, Button } from '@chakra-ui/react'
import { UseAuthContextAPI } from '../Context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'


const Login = ({ children }) => {
    const navigate = useNavigate()
    const { login, OnAuthStateChange, auth, setcurrentUser, applyToast } = UseAuthContextAPI()
    const [loading, setloading] = useState(false)
    const emailref = useRef()
    const passwordref = useRef()
    const handlesubmit = async (e) => {
        try {
            e.preventDefault()
            setloading(true)
            await login(emailref.current.value, passwordref.current.value)
            setloading(false)
        } catch (error) {
            console.log(error.message)
            setloading(false)
            applyToast('Unable to Login', error.message, 'error', 2000)
        }
    }
    useEffect(() => {
        const unsuscribe = OnAuthStateChange(auth, (user) => {
            if (user) {
                setcurrentUser(user)
                console.log(user)
                navigate('/')
            }
            else {
                setcurrentUser(null)
                console.log('User Logout')
            }
        })
        return () => {
            unsuscribe()
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>  {children}
            <Container borderRadius={'7px'} bg='gray.100' border={'1px groove black'} p={8}>
                <Heading textAlign={'center'} m={4}>Login</Heading>
                <form onSubmit={handlesubmit}>
                    <FormControl>
                        <Box m={5}>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' id='email' borderColor={'gray.400'} minLength={8} name='email' ref={emailref} bgColor={'white'} />
                        </Box>
                        <Box m={5}>
                            <FormLabel>Password</FormLabel>
                            <Input type='password' id='password' borderColor={'gray.400'} minLength={5} name='password' ref={passwordref} bgColor={'white'} />
                        </Box>
                        <Box textAlign={'center'} m={8}>
                            <Button type='submit' colorScheme='green' isLoading={loading}>Login</Button>
                        </Box>
                    </FormControl>
                </form>
            </Container>
            <Box textAlign={'center'}>Create an account ?? <Link style={{ color: 'red', textDecoration: 'underline' }} to={'/signup'}>Sign up</Link></Box>
        </>
    )
}

export default Login