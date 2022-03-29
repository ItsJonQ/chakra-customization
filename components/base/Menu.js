import React from 'react';
import {
  Menu as ChakraMenu,
  MenuItemOption as ChakraMenuItemOption,
  MenuButton as ChakraMenuButton,
} from '@chakra-ui/react';
import { Button } from './Button';
import { HStack } from './HStack';
import { Spacer } from './Spacer';
import { Icon } from './Icon';

export {
  MenuList,
  MenuItem,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react';

const ChevronDown = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
    />
  </svg>
);

export const Menu = React.forwardRef((props, ref) => {
  return <ChakraMenu gutter={4} {...props} ref={ref} />;
});

Menu.displayName = 'Menu';

export const MenuButton = React.forwardRef((props, ref) => {
  return (
    <ChakraMenuButton
      as={Button}
      textAlign="left"
      rightIcon={
        <Icon
          as={ChevronDown}
          width="20px"
          height="20px"
          marginLeft={1}
          marginRight="-8px"
        />
      }
      {...props}
      ref={ref}
    />
  );
});

MenuButton.displayName = 'MenuButton';

export const MenuItemOption = React.forwardRef(
  ({ leftIcon, spacing, children, ...props }, ref) => {
    return (
      <ChakraMenuItemOption {...props} ref={ref}>
        <HStack spacing={spacing}>
          {leftIcon ? leftIcon : null}
          <Spacer alignSelf="auto">{children}</Spacer>
        </HStack>
      </ChakraMenuItemOption>
    );
  }
);

MenuItemOption.displayName = 'MenuItemOption';

/**
 * Chakra's original Menu theme settings.
 * @see https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/menu.ts
 */

export const menuStyles = {
  baseStyle: {
    button: {
      textAlign: 'left',
    },
    item: {
      // borderBottom: '1px solid',
      // borderBottomColor: 'gray.100',
      paddingBottom: 2,
      paddingTop: 2,
      _focus: {
        background: 'gray.50',
      },
      _active: {
        background: 'gray.100',
      },
      _expanded: {
        background: 'gray.50',
      },
      // '&:first-child': {
      //   borderTopLeftRadius: 'md',
      //   borderTopRightRadius: 'md',
      // },
      // '&:last-child': {
      //   borderBottom: 'none',
      //   borderBottomLeftRadius: 'md',
      //   borderBottomRightRadius: 'md',
      // },
      '.chakra-menu__icon-wrapper': {
        color: 'brand.500',
        order: 2,
        marginInlineStart: 3,
        marginInlineEnd: 0,
      },
    },
    list: {
      boxShadow: 3,
      paddingTop: 1,
      paddingBottom: 1,
      minWidth: 180,
    },
  },
  defaultProps: {
    gutter: 8,
  },
};
