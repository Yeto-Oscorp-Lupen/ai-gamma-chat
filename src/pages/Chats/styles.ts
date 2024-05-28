import {StyleSheet} from 'react-native';
import {theme} from '../../constants/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.base,
  },
  scrollViewContainer: {
    gap: 16,
    paddingBottom: 155,
  },
});
