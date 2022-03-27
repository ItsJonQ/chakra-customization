import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

export const Button = React.forwardRef((props, ref) => {
  return <ChakraButton {...props} ref={ref} />;
});

Button.displayName = 'Button';
