import React from 'react';
import { AspectRatio as ChakraAspectRatio } from '@chakra-ui/react';

export const AspectRatio = React.forwardRef((props, ref) => {
  return <ChakraAspectRatio {...props} ref={ref} />;
});

AspectRatio.displayName = 'AspectRatio';
