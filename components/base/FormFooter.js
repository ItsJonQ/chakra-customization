import React from 'react';
import { HStack } from './HStack';

export const FormFooter = React.forwardRef((props, ref) => {
  return <HStack paddingTop={4} {...props} ref={ref} />;
});

FormFooter.displayName = 'FormFooter';
