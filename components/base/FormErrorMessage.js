import React from 'react';
import { FormErrorMessage as ChakraFormErrorMessage } from '@chakra-ui/react';

export const FormErrorMessage = React.forwardRef((props, ref) => {
  return <ChakraFormErrorMessage {...props} ref={ref} />;
});

FormErrorMessage.displayName = 'FormErrorMessage';
