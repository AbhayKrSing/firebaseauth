import React, { useEffect, useRef, useState } from 'react'
import { FormControl, FormLabel, Input, Container, Heading, Box, Button } from '@chakra-ui/react'
import { UseAuthContextAPI } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const UpdateProfile = ({ children }) => {
    const navigate = useNavigate()
    const { OnAuthStateChange, auth, setcurrentUser, applyToast, UpdateAnEmail, UpdateAnPassword, currentUser } = UseAuthContextAPI()
    const [loading, setloading] = useState(false)
    const emailref = useRef()
    const passwordref = useRef()
    const cpasswordref = useRef()
    const handlesubmit = (e) => {
        try {
            e.preventDefault()
            setloading(true)
            if (passwordref.current.value !== cpasswordref.current.value) {
                applyToast('Failed', 'password not match', 'error')
                setloading(false)
                return
            }
            let promises = []
            if (emailref.current.value !== currentUser.email) {
                promises.push(UpdateAnEmail(emailref.current.value))
            }
            if (passwordref.current.value) {
                promises.push(UpdateAnPassword(passwordref.current.value))
            }
            Promise.all(promises).then(() => {
                applyToast('Profile Updated', '', 'success', 4000)
                navigate('/')
            })
            setloading(false)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        const unsuscribe = OnAuthStateChange(auth, (user) => {
            if (user) {
                setcurrentUser(user)
            }
            else {
                setcurrentUser(null)
                navigate('/login')
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
                <Heading textAlign={'center'} m={4}>Update Profile</Heading>
                <form onSubmit={handlesubmit}>
                    <FormControl>
                        <Box m={5}>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' id='email' borderColor={'gray.400'} minLength={8} name='email' ref={emailref} bgColor={'white'} placeholder='Change your email' />
                        </Box>
                        <Box m={5}>
                            <FormLabel>Password</FormLabel>
                            <Input type='password' id='password' borderColor={'gray.400'} minLength={5} name='password' ref={passwordref} bgColor={'white'} placeholder='Change your password' />
                        </Box>
                        <Box m={5}>
                            <FormLabel>Confirm-Password</FormLabel>
                            <Input type='password' id='cpassword' borderColor={'gray.400'} minLength={5} name='cpassword' ref={cpasswordref} bgColor={'white'} placeholder='Confirm change password' />
                        </Box>
                        <Box textAlign={'center'} m={8}>
                            <Button type='submit' colorScheme='green' isLoading={loading}>Update</Button>
                        </Box>
                    </FormControl>
                </form>
            </Container>
        </>
    )
}

export default UpdateProfile