import React from 'react';
import { Button, Container, Flex,HStack } from '@chakra-ui/react';
import { PlusSquareIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Text } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';

const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode(); 

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex 
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm:"row"
        }}
      >
        <Text 
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, red.400,pink.400)"}
          bgClip={"text"}
        >
          <Link to={"/"}>Product Store</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={'/create'}>
            <Button>
             <PlusSquareIcon fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon fontSize={20} /> : <SunIcon fontSize={20} />}
          </Button>

          <Link to={'/login'}>
            <Button>
            Login
            </Button>
          </Link>
          <Link to={'/register'}>
          <Button >
            Register
          </Button>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
