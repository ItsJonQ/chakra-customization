import React from 'react';
import NextLink from 'next/link';
import { Box, Container, HStack, Spacer, Link, Icon } from '../base';
import { FiAperture } from 'react-icons/fi';

export const AppBar = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <Box background="black" color="white" {...props} ref={ref}>
      <Container>
        <HStack height="60px" spacing={6}>
          <Icon as={FiAperture} width="24px" height="24px" size="24px" />
          <Spacer height="100%">
            <HStack spacing={6} height="100%">
              <NextLink href="/components" passHref>
                <Link color="white" _hover={{ textDecoration: 'none' }}>
                  Components
                </Link>
              </NextLink>
              {children}
            </HStack>
          </Spacer>
        </HStack>
      </Container>
    </Box>
  );
});

AppBar.displayName = 'AppBar';
