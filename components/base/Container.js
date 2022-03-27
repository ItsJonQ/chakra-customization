import React from 'react';
import { Container as ChakraContainer } from '@chakra-ui/react';

export const Container = React.forwardRef((props, ref) => {
  return <ChakraContainer maxWidth="1170px" {...props} ref={ref} />;
});

Container.displayName = 'Container';
