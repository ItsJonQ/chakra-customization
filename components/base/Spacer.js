import React from 'react';
import { Spacer as ChakraSpacer } from '@chakra-ui/react';

export const Spacer = React.forwardRef((props, ref) => {
  return <ChakraSpacer {...props} ref={ref} />;
});

Spacer.displayName = 'Spacer';
