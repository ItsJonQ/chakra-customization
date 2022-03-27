import React from 'react';
import { FormHelperText as ChakraFormHelperText } from '@chakra-ui/react';

export const FormHelperText = React.forwardRef((props, ref) => {
  return <ChakraFormHelperText color="gray.400" {...props} ref={ref} />;
});

FormHelperText.displayName = 'FormHelperText';
