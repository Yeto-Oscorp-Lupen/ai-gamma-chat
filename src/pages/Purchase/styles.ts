import {StyleSheet} from 'react-native';
import {theme} from '../../constants/theme';
import {IS_IPHONE_MINI} from '../../constants';

export default StyleSheet.create({
  mainBackground: {
    backgroundColor: theme.colors.background.purchase,
    flex: 1,
    padding: 24,
    paddingVertical: 40,
    marginTop: -100,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  imagesContainer: {
    paddingTop: 20,
  },

  //FOOTER
  footer: {
    position: 'absolute',
    bottom: IS_IPHONE_MINI() ? 10 : 20,
    marginTop: 10,
    alignSelf: 'center',
  },
  footerText: {
    fontSize: 12,
    color: theme.colors.grey[100],
    textAlign: 'center',
  },
  footerButtonText: {
    color: theme.colors.main.black,
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerSubButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  button: {
    width: 300,
    marginTop: IS_IPHONE_MINI() ? 20 : 30,
    backgroundColor: theme.colors.main.primary,
  },
});
