import React from 'react';
import { Input as ChakraInput } from '@chakra-ui/react';

export const TextInput = React.forwardRef((props, ref) => {
  return <ChakraInput {...props} ref={ref} />;
});

TextInput.displayName = 'TextInput';
