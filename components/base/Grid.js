import React from 'react';
import {
  Grid as ChakraGrid,
  GridItem as ChakraGridItem,
} from '@chakra-ui/react';

export const Grid = React.forwardRef((props, ref) => {
  return <ChakraGrid {...props} ref={ref} />;
});

Grid.displayName = 'Grid';

export const GridItem = React.forwardRef((props, ref) => {
  return <ChakraGridItem {...props} ref={ref} />;
});

GridItem.displayName = 'GridItem';
