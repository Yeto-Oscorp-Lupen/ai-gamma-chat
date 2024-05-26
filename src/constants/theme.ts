const spacing = (factor: number) => factor * 8;

export const theme = {
  colors: {
    main: {
      primary: '#EE8908',
      secondary: '#282B33',
      black: '#000000',
      white: '#FFFFFF',
      gray: '#B4B4B4',
      grey: '#333438',
    },
    background: {
      base: '#232126',
      purchase: '#232126',
      secondary: '#333438',
      overlay: 'rgba(46, 38, 68, 0.85)',
    },
    text: {
      base: '#FFFFFF',
      secondary: '#595959',
      disabled: '#A1A1A1',
    },
    white: {
      100: 'rgba(255, 255, 255, 0.1)',
      300: '#E0D9F0',
      500: '#D9E4F0',
    },
    black: {
      100: 'rgba(255, 255, 255, 0.9)',
      500: '#2F2F2F',
      600: '#2B2B2B',
      700: '#212121',
      base: '#171717',
    },
    grey: {
      50: '#F0F1F3',
      100: '#D1D4DA',
      200: '#BCBCBC',
      300: '#AAAAAA',
      500: '#B4B4B4',
      base: '#697488',
      600: '#8F8F8F',
      700: '#737373',
      main: '#36383C',
    },
    orange: {
      600: '#FF9F1E',
      700: '#EE8908',
    },
    primary: {
      400: '#3A47AF',
      500: '#131A54',
      600: '#131A55',
      700: '#141B56',
    },
    secondary: {
      100: '#4953A7',
      base: '#404CB7',
      500: '#5F6DDB',
      600: '#333A75',
      700: '#383e7c',
    },
    pink: {
      base: 'rgba(215, 135, 217, 0.4)',
    },
    warning: {
      50: '#FEF7E8',
      base: '#F8AA1C',
      700: '#97670F',
    },
    error: {
      50: '#FFEFEF',
      base: '#FF3939',
      700: '#D13333',
    },
    success: {
      50: '#EBF6ED',
      base: '#008C20',
      700: '#05751F',
      pastel: 'rgba(0, 140, 32, 0.08)',
    },
    gradients: {
      categoryButton: ['#16171B', '#16171B', '#2E323B', '#2E323B'],
      radiusButton: ['#2E323B', '#16171B'],
      bottomSheet: ['#282B33', '#1E2024'],
      settingsButton: ['#474950', '#23252C'],
      purchaseButton: ['#000000', '#615748'],
    },
    alerts: [
      {
        card: '#171717',
        label: '#FFFFFF',
        overlay: 'rgba(0,0,0,0.4)',
      },
      {
        card: '#171717',
        label: '#FFFFFF',
        overlay: 'rgba(0,0,0,0.4)',
      },
    ],
  },
  font: {
    semiBold: 'SourceSansPro-Semibold',
    bold: 'SourceSansPro-Bold',
    black: 'SourceSansPro-Black',
    light: 'SourceSansPro-Light',
    regular: 'SourceSansPro-Regular',
  },
  spacing,
};
