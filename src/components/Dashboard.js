import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button, Container, Spinner, Box, Link } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { UseAuthContextAPI } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Dashboard = ({ children }) => {
    const navigate = useNavigate()
    const { currentUser, setcurrentUser, OnAuthStateChange, auth, signout } = UseAuthContextAPI()
    const logout = async () => {
        await signout()
        navigate('/login')
    }
    useEffect(() => {
        const unsuscribe = OnAuthStateChange(auth, (user) => {
            if (user) {
                setcurrentUser(user)
                console.log(user)
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
        <>
            {currentUser ? <Container>
                {children}
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                >
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                        alt='Caffe Latte'
                    />

                    <Stack>
                        <CardBody>
                            <Heading size='md'>Profile</Heading>

                            <Text py='2'>
                                {currentUser.email}
                            </Text>
                        </CardBody>

                        <CardFooter>
                            <Button variant='solid' colorScheme='green' onClick={() => { navigate('/updateprofile') }}>
                                Update Profile
                            </Button>
                        </CardFooter>
                    </Stack>
                </Card>
                <Box textAlign={'center'} color={'red'}>
                    <Link onClick={logout}>
                        Logout
                    </Link>
                </Box>
            </Container> :
                <Box textAlign={'center'}>
                    <Spinner />
                </Box>
            }
        </>
    )
}

export default Dashboard
