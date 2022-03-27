import React from 'react';
import { Text as ChakraText, useStyleConfig } from '@chakra-ui/react';

export const Text = React.forwardRef((props, ref) => {
  return <ChakraText {...props} ref={ref} />;
});

Text.displayName = 'Text';

export const textStyles = {
  variants: {
    secondary: {
      opacity: 0.6,
    },
  },
};
