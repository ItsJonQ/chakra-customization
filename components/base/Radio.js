import React from 'react';
import { Radio as ChakraRadio } from '@chakra-ui/react';
export { useRadioGroup } from '@chakra-ui/react';

export const Radio = React.forwardRef((props, ref) => {
  return <ChakraRadio colorScheme="brand" {...props} ref={ref} />;
});

Radio.displayName = 'Radio';
