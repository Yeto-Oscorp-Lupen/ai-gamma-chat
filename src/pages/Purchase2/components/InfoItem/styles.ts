import {StyleSheet} from 'react-native';
import {theme} from '../../../../constants/theme';
import {PURCHASE_1_HORIZONTAL_PADDING} from '../../styles';

export default StyleSheet.create({
  container: {
    paddingHorizontal: PURCHASE_1_HORIZONTAL_PADDING,
    flexDirection: 'row',
    gap: theme.spacing(4),
    marginTop: theme.spacing(3),
  },
  image: {
    width: 25,
    height: 25,
  },
  textContainer: {
    gap: 4,
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: theme.colors.main.primary,
    fontWeight: '500',
  },
  description: {
    fontSize: 12,
    color: theme.colors.black[300],
  },
});
