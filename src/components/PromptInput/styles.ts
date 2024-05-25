import {StyleSheet} from 'react-native';
import {theme} from '../../constants/theme';

export default StyleSheet.create({
  sendIcon: {
    width: 25,
    height: 25,
  },
  sendButton: {
    flex: 1,
    height: 50,
    paddingRight: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 5,
    height: 60,
    paddingHorizontal: 16,
    marginLeft: 10,
    borderWidth: 0.5,
    borderColor: theme.colors.main.primary,
    fontWeight: '700',
    borderRadius: 10,
    color: theme.colors.main.white,
  },
});
