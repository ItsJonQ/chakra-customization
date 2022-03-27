import React from 'react';
import { Box, useStyleConfig } from '@chakra-ui/react';

export const Card = React.forwardRef((props, ref) => {
  const styles = useStyleConfig('Card', props);
  return <Box __css={styles} {...props} ref={ref} />;
});

Card.displayName = 'Card';

export const CardBody = React.forwardRef((props, ref) => {
  const styles = useStyleConfig('CardBody', props);
  return <Box __css={styles} {...props} ref={ref} />;
});

CardBody.displayName = 'CardBody';

const cardSizes = {
  xl: {
    padding: 8,
  },
  lg: {
    padding: 6,
  },
  md: {
    padding: 4,
  },
  sm: {
    padding: 2,
  },
  none: {
    padding: 0,
  },
};

export const cardStyles = {
  baseStyle: {
    padding: 4,
    borderColor: 'gray.100',
    borderWidth: '1px',
    borderRadius: 'md',
    boxShadow: 'sm',
  },
  sizes: cardSizes,
  defaultProps: {
    size: 'md',
  },
};

export const cardBodyStyles = {
  baseStyle: {
    padding: 4,
  },
  sizes: cardSizes,
  defaultProps: {
    size: 'md',
  },
};
