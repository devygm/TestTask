import { responsiveSize } from './utils';

export const UIColors = {
  navigationBar: '#362f70',
  navigationTitle: 'white',
  appBackGroundColor: 'white',
  primaryButton: '#4f5863',
  primaryButtonTitle: 'white',
};

export const fontSizes = {
  mini: responsiveSize(8),
  tiny: responsiveSize(10),
  extraExtraSmall: responsiveSize(12),
  extraSmall: responsiveSize(14),
  small: responsiveSize(16),
  medium: responsiveSize(18),
  mediumLarge: responsiveSize(20),
  large: responsiveSize(22),
  extraLarge: responsiveSize(24),
  extraLarger: responsiveSize(28),
  extraExtraLarge: responsiveSize(32),
  giant: responsiveSize(36),
  iosIcons: responsiveSize(32),
  androidCloseIcon: responsiveSize(22),
  androidCheckmarkIcon: responsiveSize(26),
};

export const spacing = {
  zero: responsiveSize(0),
  border: responsiveSize(1),
  borderDouble: responsiveSize(2),
  extraExtraSmall: responsiveSize(3),
  extraSmall: responsiveSize(5),
  small: responsiveSize(8),
  semiMedium: responsiveSize(10),
  medium: responsiveSize(12),
  mediumLarge: responsiveSize(16),
  large: responsiveSize(20),
  extraLarge: responsiveSize(24),
  extraExtraLarge: responsiveSize(30),
};

export const itemSizes = {
  defaultHeight: responsiveSize(30),
  defaultWidth: responsiveSize(30),
};

export const fontWeights = {
  thin: '100',
  light: '300',
  book: '400',
  medium: '500',
  bold: '700',
  black: '900',
};
