import {
  extendTheme,
  withDefaultColorScheme,
  withDefaultSize,
} from '@chakra-ui/react';
import { whiten, darken } from '@chakra-ui/theme-tools';
import { colors, spacing as space } from './tokens';
import { cardStyles, cardBodyStyles } from '../components/base/Card';
import { textStyles } from '../components/base/Text';

const blue = colors.blue[400];
const brand = colors.brandBlue[300];
const green = colors.green[500];
const orange = colors.orange[500];
const pink = colors.pink[600];
const red = colors.red[500];
const yellow = colors.yellow[450];

/**
 * Chakra uses specific shades for specific functions.
 * For instance, within their range, [500] is always used as the default.
 *
 * In order to satisfy this range, we'll have to use Chakra's (internal)
 * theming tools to adjust our custom colors to map correctly to their
 * theming system.
 *
 * The generated results will be imperfectly mapped to our specified
 * colors in our tokens. The main thing is that the primary shade (500) is
 * using the exact hex value.
 */
const colorsForChakra = {
  brand: {
    50: whiten(brand, 90)(),
    100: whiten(brand, 70)(),
    200: whiten(brand, 50)(),
    300: whiten(brand, 30)(),
    400: whiten(brand, 10)(),
    500: brand,
    600: darken(brand, 5)(),
    700: darken(brand, 10)(),
    800: darken(brand, 15)(),
    900: darken(brand, 20)(),
  },
  green: {
    50: whiten(green, 90)(),
    100: whiten(green, 70)(),
    200: whiten(green, 50)(),
    300: whiten(green, 30)(),
    400: whiten(green, 10)(),
    500: green,
    600: darken(green, 5)(),
    700: darken(green, 10)(),
    800: darken(green, 15)(),
    900: darken(green, 20)(),
  },
  yellow: {
    50: whiten(yellow, 90)(),
    100: whiten(yellow, 70)(),
    200: whiten(yellow, 50)(),
    300: whiten(yellow, 30)(),
    400: whiten(yellow, 10)(),
    500: yellow,
    600: darken(yellow, 5)(),
    700: darken(yellow, 10)(),
    800: darken(yellow, 15)(),
    900: darken(yellow, 20)(),
  },
  red: {
    50: whiten(red, 90)(),
    100: whiten(red, 70)(),
    200: whiten(red, 50)(),
    300: whiten(red, 30)(),
    400: whiten(red, 10)(),
    500: red,
    600: darken(red, 5)(),
    700: darken(red, 10)(),
    800: darken(red, 15)(),
    900: darken(red, 20)(),
  },
  blue: {
    50: whiten(blue, 90)(),
    100: whiten(blue, 70)(),
    200: whiten(blue, 50)(),
    300: whiten(blue, 30)(),
    400: whiten(blue, 10)(),
    500: blue,
    600: darken(blue, 5)(),
    700: darken(blue, 10)(),
    800: darken(blue, 15)(),
    900: darken(blue, 20)(),
  },
  pink: {
    50: whiten(pink, 90)(),
    100: whiten(pink, 70)(),
    200: whiten(pink, 50)(),
    300: whiten(pink, 30)(),
    400: whiten(pink, 10)(),
    500: pink,
    600: darken(pink, 5)(),
    700: darken(pink, 10)(),
    800: darken(pink, 15)(),
    900: darken(pink, 20)(),
  },
  orange: {
    50: whiten(orange, 90)(),
    100: whiten(orange, 70)(),
    200: whiten(orange, 50)(),
    300: whiten(orange, 30)(),
    400: whiten(orange, 10)(),
    500: orange,
    600: darken(orange, 5)(),
    700: darken(orange, 10)(),
    800: darken(orange, 15)(),
    900: darken(orange, 20)(),
  },
  gray: {
    50: colors.gray[25],
    100: colors.gray[50],
    200: colors.gray[100],
    300: colors.gray[200],
    400: colors.gray[400],
    500: colors.gray[500],
    600: colors.gray[600],
    700: colors.gray[700],
    800: colors.gray[800],
    900: colors.gray[900],
  },
};

const fontSizes = {
  xs: '12px',
  sm: '13px',
  md: '15px',
  lg: '18px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '32px',
  '4xl': '32px',
  '5xl': '32px',
  '6xl': '32px',
  '7xl': '32px',
  '8xl': '32px',
  '9xl': '32px',
};

const borderRadius = {
  radii: {
    none: '0',
    sm: '1px',
    base: '2px',
    md: '3px',
    lg: '4px',
    xl: '8px',
    '2xl': '12px',
    '3xl': '16px',
    full: '9999px',
  },
};

const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 400,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

const spacing = {
  space,
};

const shadows = {
  outline: '0 0 0 2px rgba(67, 83, 255, 0.5)',
};

const global = {
  'html, body': {
    background: 'gray.50',
    fontSize: '15px',
  },
};

const styles = { global };

const controlComponentDefaults = {
  defaultProps: {
    focusBorderColor: brand,
    errorBorderColor: red,
  },
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: 'medium',
    },
  },
  Input: controlComponentDefaults,
  NumberInput: controlComponentDefaults,
  PinInput: controlComponentDefaults,
  Select: controlComponentDefaults,
  Textarea: controlComponentDefaults,
  Card: cardStyles,
  CardBody: cardBodyStyles,
  Text: textStyles,
};

const extendedTheme = extendTheme({
  borderRadius,
  components,
  fontSizes,
  fontWeights,
  radii: borderRadius.radii,
  shadows,
  sizes: space,
  space,
  spacing,
  styles,
});

export const theme = {
  ...extendedTheme,
  colors: {
    ...extendedTheme.colors,
    ...colorsForChakra,
  },
};
