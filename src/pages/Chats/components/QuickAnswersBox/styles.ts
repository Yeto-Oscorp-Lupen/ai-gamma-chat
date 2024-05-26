import {StyleSheet} from 'react-native';
import {theme} from '../../../../constants/theme';

export default StyleSheet.create({
  container: {
    gap: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: theme.colors.main.white,
    marginHorizontal: 16,
  },
  hintsContainer: {
    paddingHorizontal: 16,
    gap: 8,
  },
  hintContainer: {
    gap: 8,
  },
  hintText: {
    fontSize: 16,
    color: theme.colors.main.gray,
  },
  answerButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: theme.colors.main.grey,
    borderRadius: 10,
  },
});
