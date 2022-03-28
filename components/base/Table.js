import React from 'react';
import { Th as ChakraTh } from '@chakra-ui/react';
export {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Td,
  TableCaption,
} from '@chakra-ui/react';

export const Th = React.forwardRef((props, ref) => {
  return (
    <ChakraTh
      textTransform="none"
      fontSize="md"
      letterSpacing="0"
      {...props}
      ref={ref}
    />
  );
});

Th.displayName = 'Th';
