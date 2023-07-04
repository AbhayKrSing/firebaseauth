import React, { useRef, useState } from 'react'
import { FormControl, FormLabel, Input, Container, Heading, Box, Button } from '@chakra-ui/react'
import { UseAuthContextAPI } from '../Context/AuthContext'
import { Link } from 'react-router-dom'


const Login = ({ children }) => {
    const { applyToast, resetpassword } = UseAuthContextAPI()
    const [loading, setloading] = useState(false)
    const emailref = useRef()
    const handlesubmit = async (e) => {
        try {
            e.preventDefault()
            setloading(true)
            await resetpassword(emailref.current.value)      //use temporary email to be able to do a further action.It return nothing.
            setloading(false)
            applyToast('Open your email for further instruction', '', 'success', 9000)
        } catch (error) {
            console.log(error.message)
            setloading(false)
            applyToast('Unable reset password', error.message, 'error', 2000)
        }
    }


    return (
        <>  {children}
            <Container borderRadius={'7px'} bg='gray.100' border={'1px groove black'} p={8}>
                <Heading textAlign={'center'} m={4}>Reset password</Heading>
                <form onSubmit={handlesubmit}>
                    <FormControl>
                        <Box m={5}>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' id='email' borderColor={'gray.400'} minLength={8} name='email' ref={emailref} bgColor={'white'} />
                        </Box>
                        <Box textAlign={'center'} m={8}>
                            <Button type='submit' colorScheme='green' isLoading={loading}>Reset password</Button>
                        </Box>
                    </FormControl>
                </form>
            </Container>
            <Box textAlign={'center'}>Have a account ?? <Link style={{ color: 'red', textDecoration: 'underline' }} to={'/login'}>Sign in</Link></Box>
        </>
    )
}

export default Login