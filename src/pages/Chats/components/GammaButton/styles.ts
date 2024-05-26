import {StyleSheet} from 'react-native';
import {theme} from '../../../../constants/theme';

export default StyleSheet.create({
  gammaButton: {
    height: 100,
    backgroundColor: theme.colors.main.secondary,
    borderRadius: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginHorizontal: 16,
    marginTop: 16,
  },
  gammaButtonImage: {
    height: 104,
    width: 106,
  },
  gammaButtonInfoContainer: {
    flex: 1,
    gap: 2,
  },
  gammaButtonTitle: {
    color: theme.colors.orange[700],
    fontWeight: '700',
    fontSize: 19,
  },
  gammaButtonDescription: {
    color: theme.colors.orange[600],
    fontSize: 17,
    fontWeight: '400',
  },
  gammaButtonArrow: {
    color: theme.colors.orange[700],
  },
});
