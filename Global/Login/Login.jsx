import {
    Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Login = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  return (
    <>
    <Navbar />
    <Container maxW={"container.sm"} py={12}>
      <FormControl >
        <Heading as={"h1"} textAlign={"center"} size={"2xl"}>
          Login Here
        </Heading>
        <FormLabel>Email</FormLabel>
        <Input type="email" value={input} onChange={handleInputChange} />
        
        <FormLabel>Password</FormLabel>
        <Input type="password" value={input} onChange={handleInputChange} mb={'5'} />

        <Button colorScheme="blue" w="full">
          Submit
        </Button>
      </FormControl>
    </Container>

    <Footer />
    </>
  );
};

export default Login;
