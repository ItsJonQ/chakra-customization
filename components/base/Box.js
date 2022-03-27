import React from 'react';
import { Box as ChakraBox } from '@chakra-ui/react';

export const Box = React.forwardRef((props, ref) => {
  return <ChakraBox {...props} ref={ref} />;
});

Box.displayName = 'Box';
