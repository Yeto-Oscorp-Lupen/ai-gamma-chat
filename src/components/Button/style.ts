import {StyleSheet} from 'react-native';
import {theme} from '../../constants/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing(1),
    paddingHorizontal: theme.spacing(3),
    paddingVertical: theme.spacing(2),
    borderRadius: theme.spacing(2),
  },
  createButton: {
    borderRadius: theme.spacing(2),
    alignSelf: 'center',
  },
  createButtonText: {
    fontFamily: theme.font.semiBold,
    fontSize: 20,
    color: theme.colors.main.white,
  },
  empty: {
    width: 20,
  },
});
