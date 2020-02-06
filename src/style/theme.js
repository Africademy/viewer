const colors = {
  primary: '#6735E0',
  primaryDark: '#332557',
  secondary: '#f8f8f8',
  white: '#ffffff',
  dark: '#424242',
  shadow: '#0000003d',
  light: '#e6e6e6',
};

const theme = {
  app: {
    primaryBackground: `linear-gradient(to top right, ${colors.primaryDark}, ${colors.primary})`,
    secondaryBackground: colors.secondary,
    contentBackground: colors.white,
  },
  page: {
    templateNameColor: colors.white,
    screenInactiveColor: colors.secondary,
    screenActiveColor: colors.primary,
    color: colors.primary,
  },
  sidebar: {
    logoColor: colors.white,
    color: colors.primary,
    linkColor: colors.dark,
    linkIndicator: colors.primary,
    linkBackground: 'rgba(103,53,224, 0.1)',
    shadowColors: colors.shadow,
    border: colors.light,
  },
  tabs: {
    border: colors.primary,
  },
  button: {
    background: colors.primary,
    color: colors.white,
    shadowColors: colors.shadow,
  },
  options: {
    color: colors.dark,
    border: colors.light,
  },
};

export default theme;
