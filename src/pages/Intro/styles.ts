import {StyleSheet} from 'react-native';
import {IS_IPHONE_MINI, MAIN_HORIZONTAL_WIDTH, WIDTH} from '../../constants';
import {theme} from '../../constants/theme';

const BACKGROUND_IMAGE_WIDTH = WIDTH;

export default StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: theme.colors.main.black,
  },
  scrollView: {
    flex: 1,
  },
  backgroundImageContainer: {
    flex: 0.75,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  comment: {
    width: BACKGROUND_IMAGE_WIDTH - 16,
    height: BACKGROUND_IMAGE_WIDTH - 80,
    resizeMode: 'contain',
  },
  thirdImage: {
    width: BACKGROUND_IMAGE_WIDTH + 100,
    height: BACKGROUND_IMAGE_WIDTH + 100,
    alignSelf: 'center',
  },
  infoText: {
    marginVertical: 16,
    fontSize: 30,
    color: theme.colors.main.white,
    fontFamily: theme.font.bold,
  },
  indexViewContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  indexViewInnerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 8,
    borderRadius: 16,
  },
  indexView: {
    width: 10,
    height: 10,
    borderRadius: 99,
    backgroundColor: theme.colors.main.white,
  },
  selectedIndexView: {
    backgroundColor: theme.colors.main.primary,
  },
  footer: {
    flex: 0.25,
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
