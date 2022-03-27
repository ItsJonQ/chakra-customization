import React from 'react';
import { ButtonGroup as ChakraButtonGroup } from '@chakra-ui/react';

export const ButtonGroup = React.forwardRef((props, ref) => {
  return <ChakraButtonGroup {...props} ref={ref} />;
});

ButtonGroup.displayName = 'ButtonGroup';
