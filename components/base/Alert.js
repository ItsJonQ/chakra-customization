import React from 'react';
import {
  Alert as ChakraAlert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
} from '@chakra-ui/react';
import { VStack } from './VStack';

export const Alert = React.forwardRef(
  ({ colorScheme, children, status, title, ...props }, ref) => {
    let color = undefined;

    if ((!colorScheme && !status) || status === 'info') {
      color = 'brand';
    }

    return (
      <ChakraAlert
        alignItems="flex-start"
        background="white"
        borderBottom="1px solid"
        borderBottomColor="gray.200"
        borderRadius="md"
        borderRight="1px solid"
        borderRightColor="gray.200"
        borderTop="1px solid"
        borderTopColor="gray.200"
        colorScheme={color}
        variant="left-accent"
        status={status}
        {...props}
        ref={ref}
      >
        <AlertIcon />
        <VStack spacing={0}>
          {title ? <AlertTitle>{title}</AlertTitle> : null}
          <AlertDescription>{children}</AlertDescription>
        </VStack>
      </ChakraAlert>
    );
  }
);

Alert.displayName = 'Alert';

export const alertStyles = {
  defaultProps: {
    colorScheme: 'brand',
  },
};
