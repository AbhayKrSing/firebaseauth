import React, { useState, useRef } from 'react'
import { FormControl, FormLabel, Input, Container, Heading, Box, Button, Text, Link } from '@chakra-ui/react'
const SignUp = ({ children }) => {
    const emailref = useRef()
    const passwordref = useRef()
    const cpasswordref = useRef()
    const handlesubmit = (e) => {
        e.preventDefault()
    }
    const handlechange = () => {

    }
    return (
        <>  {children}
            <Container border={'1px solid black'} borderRadius={'7px'}>
                <Heading textAlign={'center'} m={4}>SignUp</Heading>
                <form onSubmit={handlesubmit}>
                    <FormControl>
                        <Box m={5}>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' id='email' minLength={8} name='email' ref={emailref} onChange={handlechange} />
                        </Box>
                        <Box m={5}>
                            <FormLabel>Password</FormLabel>
                            <Input type='password' id='password' minLength={5} name='password' ref={passwordref} onChange={handlechange} />
                        </Box>
                        <Box m={5}>
                            <FormLabel>Confirm-Password</FormLabel>
                            <Input type='password' id='cpassword' minLength={5} name='cpassword' ref={cpasswordref} onChange={handlechange} />
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
