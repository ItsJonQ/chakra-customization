import React from 'react';
import { Divider as ChakraDivider } from '@chakra-ui/react';

export const Divider = React.forwardRef((props, ref) => {
  return <ChakraDivider borderColor="gray.200" {...props} ref={ref} />;
});

Divider.displayName = 'Divider';
