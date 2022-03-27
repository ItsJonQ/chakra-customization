import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

export const Button = React.forwardRef(
  ({ colorScheme, variant, ...props }, ref) => {
    const color =
      colorScheme === 'yellow' && variant === 'solid' ? 'white' : undefined;

    return (
      <ChakraButton
        color={color}
        variant={variant}
        colorScheme={colorScheme}
        {...props}
        ref={ref}
      />
    );
  }
);

Button.displayName = 'Button';

export const buttonStyles = {
  baseStyle: {
    background: 'white',
    fontWeight: 'medium',
  },
  defaultProps: {
    variant: 'outline',
  },
};
