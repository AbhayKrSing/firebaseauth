import React, { useRef } from 'react'
import { FormControl, FormLabel, Input, Container, Heading, Box, Button, Link } from '@chakra-ui/react'
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
            <Container borderRadius={'7px'} bg='gray.100' border={'1px groove black'}>
                <Heading textAlign={'center'} m={4}>SignUp</Heading>
                <form onSubmit={handlesubmit}>
                    <FormControl>
                        <Box m={5}>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' id='email' borderColor={'gray.400'} minLength={8} name='email' ref={emailref} onChange={handlechange} />
                        </Box>
                        <Box m={5}>
                            <FormLabel>Password</FormLabel>
                            <Input type='password' id='password' borderColor={'gray.400'} minLength={5} name='password' ref={passwordref} onChange={handlechange} />
                        </Box>
                        <Box m={5}>
                            <FormLabel>Confirm-Password</FormLabel>
                            <Input type='password' id='cpassword' borderColor={'gray.400'} minLength={5} name='cpassword' ref={cpasswordref} onChange={handlechange} />
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
