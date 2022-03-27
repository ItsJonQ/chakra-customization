import React from 'react';
import { HStack as ChakraHStack } from '@chakra-ui/react';

export const HStack = React.forwardRef((props, ref) => {
  return (
    <ChakraHStack justify="space-between" spacing={4} {...props} ref={ref} />
  );
});

HStack.displayName = 'HStack';
