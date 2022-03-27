import React from 'react';
import { useRadio } from '@chakra-ui/react';
import { Box } from './Box';
import { Card } from './Card';
import { Checkbox } from './Checkbox';
import { Spacer } from './Spacer';
import { HStack } from './HStack';

export { useRadio } from '@chakra-ui/react';

export const RadioCard = React.forwardRef(({ children, ...props }, ref) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" width="100%">
      <input {...input} />
      <Card
        {...checkbox}
        _checked={{
          borderColor: 'brand.600',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        {...props}
      >
        <HStack spacing={4}>
          <Checkbox
            as="div"
            aria-hidden
            pointerEvents="none"
            borderRadius="9999px"
            overflow="hidden"
            isChecked={input.checked}
            colorScheme="brand"
            __css={{
              '.chakra-checkbox__control': { borderRadius: 9999 },
            }}
          />
          <Spacer>{children}</Spacer>
        </HStack>
      </Card>
    </Box>
  );
});

RadioCard.displayName = 'RadioCard';
