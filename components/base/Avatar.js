import React from 'react';
import { Avatar as ChakraAvatar } from '@chakra-ui/react';

export const Avatar = React.forwardRef((props, ref) => {
  return <ChakraAvatar {...props} ref={ref} />;
});

Avatar.displayName = 'Avatar';

/**
 * Chakra's avatar size util
 * @see https://github.com/chakra-ui/chakra-ui/blob/3adda59f95986abfc7b4d97a855900270cde2d3c/packages/theme/src/components/avatar.ts#L49
 */
function getSize(size) {
  return {
    container: {
      width: size,
      height: size,
      fontSize: `calc(${size} / 2.5)`,
    },
    excessLabel: {
      width: size,
      height: size,
    },
    label: {
      fontSize: `calc(${size} / 2.5)`,
      lineHeight: size !== '100%' ? size : undefined,
    },
  };
}

export const avatarStyles = {
  sizes: {
    '2xs': getSize('12px'),
    xs: getSize('16px'),
    sm: getSize('20px'),
    md: getSize('24px'),
    lg: getSize('32px'),
    xl: getSize('48px'),
  },
};
