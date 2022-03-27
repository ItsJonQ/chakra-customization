import React from 'react';
import { FormLabel as ChakraFormLabel } from '@chakra-ui/react';

export const FormLabel = React.forwardRef((props, ref) => {
  return <ChakraFormLabel {...props} ref={ref} />;
});

FormLabel.displayName = 'FormLabel';
