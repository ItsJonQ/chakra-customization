import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';
import { mode, transparentize } from '@chakra-ui/theme-tools';

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

const sizes = {
  lg: {
    h: 12,
    minW: 12,
    fontSize: 'lg',
    px: 6,
  },
  md: {
    h: 10,
    minW: 10,
    fontSize: 'md',
    px: 4,
  },
  sm: {
    h: 8,
    minW: 8,
    fontSize: 'sm',
    px: 3,
  },
  xs: {
    h: 6,
    minW: 6,
    fontSize: 'xs',
    px: 2,
  },
};

const variantGhost = (props) => {
  const { colorScheme: c, theme } = props;

  if (c === 'gray') {
    return {
      color: mode(`inherit`, `whiteAlpha.900`)(props),
      _hover: {
        bg: mode(`gray.100`, `whiteAlpha.200`)(props),
      },
      _active: { bg: mode(`gray.100`, `whiteAlpha.300`)(props) },
    };
  }

  const darkHoverBg = transparentize(`${c}.200`, 0.12)(theme);
  const darkActiveBg = transparentize(`${c}.200`, 0.24)(theme);

  return {
    color: mode(`${c}.600`, `${c}.200`)(props),
    bg: 'transparent',
    _hover: {
      bg: mode(`${c}.50`, darkHoverBg)(props),
    },
    _active: {
      bg: mode(`${c}.100`, darkActiveBg)(props),
    },
  };
};

const variantOutline = (props) => {
  const { colorScheme: c } = props;
  const borderColor = mode(`gray.200`, `whiteAlpha.300`)(props);
  return {
    border: '1px solid',
    borderColor: c === 'gray' ? borderColor : 'currentColor',
    ...variantGhost(props),
  };
};

export const buttonStyles = {
  baseStyle: {
    background: 'white',
    fontWeight: 'medium',
  },
  variants: {
    ghost: variantGhost,
    outline: variantOutline,
  },
  sizes,
  defaultProps: {
    variant: 'outline',
  },
};
