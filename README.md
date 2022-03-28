# Customizing Chakra

### About

This repo is an example of how we can:

- Customize [Chakra](https://chakra-ui.com/) to better fit our custom look and feel.
- Integrate with existing pre-defined Design Tokens.
- Create an [base component layer of control](https://en.wikipedia.org/wiki/Adapter_pattern) to contain customizations and provide flexibility for internal swapping later.

### Areas of interest

##### `styles/tokens.js`

A collection of base Design Tokens - these can be anyhing really. They're not used directly with Chakra components. They are integrated into the theme setup layer, mapping values to Chakra's internal system.

##### `styles/theme.js`

This is the main file to [customize Chakra's theme](https://chakra-ui.com/docs/styled-system/theming/customize-theme). It contains foundational theming setup (e.g. Color, spacing, typography), but also Chakra specific component overrides and adjustments.

##### `components/base/*`

It's recommended not to consume Chakra directly. Instead, any component you need should have an in-between layer which lives in this `base/` directory. For components without modification, we can export the components (and hooks) from Chakra directly. Otherwise, we'll have to intercept.

To intercept, make sure you `React.forwardRef` and spread the `...props` to the underlying Chakra component to ensure that it works as expected.

#### `pages/components/*` and `pages/exampels/*`

The code for these basic to complete examples for these components can be found here.
