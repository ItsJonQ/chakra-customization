import React from 'react';
import { VStack as ChakraVStack } from '@chakra-ui/react';

export const VStack = React.forwardRef((props, ref) => {
  return <ChakraVStack spacing={4} alignItems="stretch" {...props} ref={ref} />;
});

VStack.displayName = 'VStack';
