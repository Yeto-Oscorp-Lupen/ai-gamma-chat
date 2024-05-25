import {StyleSheet} from 'react-native';
import {IS_IPHONE_MINI, MAIN_HORIZONTAL_WIDTH, WIDTH} from '../../constants';
import {theme} from '../../constants/theme';

const BACKGROUND_IMAGE_WIDTH = WIDTH;

export default StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: theme.colors.main.black,
  },
  backgroundImageContainer: {
    flex: 0.8,
    alignSelf: 'center',
  },
  subImage: {
    alignSelf: 'center',
    marginTop: 60,
    width: 157,
    height: 75,
  },
  backgroundImage: {
    width: BACKGROUND_IMAGE_WIDTH,
    height: BACKGROUND_IMAGE_WIDTH,
    marginTop: 50,
  },
  footer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: MAIN_HORIZONTAL_WIDTH,
    marginBottom: IS_IPHONE_MINI() ? 20 : 0,
  },
  continueButton: {
    width: '100%',
    backgroundColor: theme.colors.main.primary,
  },
});
