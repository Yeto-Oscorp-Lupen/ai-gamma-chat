import {StyleSheet} from 'react-native';

import {theme} from '../../constants/theme';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: theme.colors.background.base,
    height: '100%',
  },
  title: {
    fontFamily: 'Montserrat',
    fontSize: 20,
    color: theme.colors.main.white,
    fontWeight: 'bold',
  },
  header: {
    paddingHorizontal: 28,
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    gap: 40,
    paddingHorizontal: 28,
  },
});
