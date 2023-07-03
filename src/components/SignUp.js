import React, { useEffect, useRef } from 'react'
import { FormControl, FormLabel, Input, Container, Heading, Box, Button, Link } from '@chakra-ui/react'
import { UseAuthContextAPI } from '../Context/AuthContext'

const SignUp = ({ children }) => {
    const { signup, OnAuthStateChange, auth, setcurrentUser } = UseAuthContextAPI()
    const emailref = useRef()
    const passwordref = useRef()
    const cpasswordref = useRef()
    const handlesubmit = async (e) => {
        e.preventDefault()
        if (passwordref.current.value !== cpasswordref.current.value) {
            throw Error('Your confirmpassword not match with current password')
        }
        const user = await signup(emailref.current.value, passwordref.current.value)
        console.log(user)
    }
    useEffect(() => {
        const unsuscribe = OnAuthStateChange(auth, (user) => {
            setcurrentUser(user)
        })
        return () => {
            unsuscribe()
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>  {children}
            <Container borderRadius={'7px'} bg='gray.100' border={'1px groove black'} p={8}>
                <Heading textAlign={'center'} m={4}>SignUp</Heading>
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
                        <Box m={5}>
                            <FormLabel>Confirm-Password</FormLabel>
                            <Input type='password' id='cpassword' borderColor={'gray.400'} minLength={5} name='cpassword' ref={cpasswordref} bgColor={'white'} />
                        </Box>
                        <Box textAlign={'center'} m={8}>
                            <Button type='submit' colorScheme='green'>SignUp</Button>
                        </Box>
                    </FormControl>
                </form>
            </Container>
            <Box textAlign={'center'}>Already have a account ?? <Link color='blue'>Sign in</Link></Box>
        </>
    )
}

export default SignUp
