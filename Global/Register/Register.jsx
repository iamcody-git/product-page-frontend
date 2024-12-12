import { Button, Container, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Register = () => {
    const [input, setInput] = useState("");
    
      const handleInputChange = (e) => setInput(e.target.value);
  return (
    <>
    <Navbar />
    <Container maxW={"container.sm"} py={12}>
      <FormControl >
        <Heading as={"h1"} textAlign={"center"} size={"2xl"}>
          Register Here
        </Heading>
        <FormLabel>Email</FormLabel>
        <Input type="email" value={input} onChange={handleInputChange} />

        <FormLabel>Username</FormLabel>
        <Input type="text" value={input} onChange={handleInputChange} />
        
        <FormLabel>Password</FormLabel>
        <Input type="password" value={input} onChange={handleInputChange} mb={'5'} />

        <Button  colorScheme="blue" w="full">
          Submit
        </Button>
      </FormControl>
    </Container>
    <Footer />
    </>
  )
}

export default Register
