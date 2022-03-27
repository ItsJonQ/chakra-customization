import React from 'react';
import { FormControl as ChakraFormControl } from '@chakra-ui/react';

export const FormControl = React.forwardRef((props, ref) => {
  return <ChakraFormControl {...props} ref={ref} />;
});

FormControl.displayName = 'FormControl';
