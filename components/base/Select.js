import React from 'react';
import { Select as ChakraSelect } from '@chakra-ui/react';

export const Select = React.forwardRef((props, ref) => {
  return <ChakraSelect {...props} ref={ref} />;
});

Select.displayName = 'Select';
