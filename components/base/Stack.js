import React from 'react';
import { Stack as ChakraStack } from '@chakra-ui/react';

export const Stack = React.forwardRef((props, ref) => {
  return <ChakraStack spacing={4} {...props} ref={ref} />;
});

Stack.displayName = 'Stack';
