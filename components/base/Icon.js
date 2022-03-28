import React from 'react';
import { Icon as ChakraIcon } from '@chakra-ui/react';

export const Icon = React.forwardRef((props, ref) => {
  return <ChakraIcon {...props} ref={ref} />;
});

Icon.displayName = 'Icon';
