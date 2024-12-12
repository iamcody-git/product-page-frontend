import React from 'react';
import { Container, Heading, HStack, Icon, Link, Stack } from '@chakra-ui/react';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';


const Footer = () => {
  const socialLinks = [
    { href: 'https://x.com', icon: <SiX /> },
    { href: 'https://github.com', icon: <SiGithub /> },
    { href: 'https://www.linkedin.com', icon: <SiLinkedin /> },
  ];

  return (
    <Container as="footer" py={{ base: '10', md: '12' }}>
      <Stack gap="6">
        <Stack direction="row" justify="space-between" align="left">
          <Heading as={'h3'} textAlign={'left'} text={'1xl'} gap={20} color={"green.200"}>Cody@copyrightAllAreReserved</Heading>
     
          <HStack gap="4">
            {socialLinks.map(({ href, icon }, index) => (
              <Link key={index} href={href} isExternal color="gray.500">
                <Icon as={icon.type} w={6} h={6} />
              </Link>
            ))}
          </HStack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Footer;
