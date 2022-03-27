import React from 'react';
import { Checkbox as ChakraCheckbox } from '@chakra-ui/react';

export const Checkbox = React.forwardRef((props, ref) => {
  return <ChakraCheckbox colorScheme="brand" {...props} ref={ref} />;
});

Checkbox.displayName = 'Checkbox';
