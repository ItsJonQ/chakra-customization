import React from 'react';
import { Text } from './Text';

export const Title = React.forwardRef((props, ref) => {
  return <Text fontSize="3xl" {...props} ref={ref} />;
});

Title.displayName = 'Title';

export const Heading = React.forwardRef((props, ref) => {
  return <Text fontSize="2xl" {...props} ref={ref} />;
});

Heading.displayName = 'Heading';

export const Subheading = React.forwardRef((props, ref) => {
  return <Text fontSize="xl" {...props} ref={ref} />;
});

Subheading.displayName = 'Subheading';

export const BodyLarge = React.forwardRef((props, ref) => {
  return <Text fontSize="lg" {...props} ref={ref} />;
});

BodyLarge.displayName = 'BodyLarge';

export const Body = React.forwardRef((props, ref) => {
  return <Text fontSize="md" {...props} ref={ref} />;
});

Body.displayName = 'Body';

export const Caption = React.forwardRef((props, ref) => {
  return <Text fontSize="sm" {...props} ref={ref} />;
});

Caption.displayName = 'Caption';
