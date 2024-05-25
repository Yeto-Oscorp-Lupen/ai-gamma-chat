import {StyleSheet} from 'react-native';
import {theme} from '../../constants/theme';

export default StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: theme.colors.main.black,
  },
  columnWrapper: {
    gap: 5,
    marginLeft: theme.spacing(0.3),
  },
  seperator: {
    height: theme.spacing(15),
  },
  categoryChip: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.main.grey,
    height: 30,
    paddingHorizontal: theme.spacing(2),
    borderRadius: theme.spacing(1.2),
    margin: theme.spacing(0.5),
  },
  categoryChipSelected: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.main.primary,
    height: 30,
    paddingHorizontal: theme.spacing(2),
    borderRadius: theme.spacing(1.2),
    margin: theme.spacing(0.5),
  },
  categoryChipText: {
    color: theme.colors.main.white,
    fontFamily: theme.font.bold,
    fontSize: 15,
  },
});
