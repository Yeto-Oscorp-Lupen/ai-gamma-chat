import {StyleSheet} from 'react-native';
import {theme} from '../../constants/theme';

export default StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: theme.colors.main.black,
  },
  columnWrapper: {
    gap: 5,
    marginLeft: theme.spacing(1),
  },
});
