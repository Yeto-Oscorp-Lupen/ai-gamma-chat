import {StyleSheet} from 'react-native';
import {theme} from '../../constants/theme';

export const PURCHASE_BUTTON_WIDTH = 310;
export const PURCHASE_BUTTON_HEIGHT = 80;
export const PURCHASE_BUTTON_BORDER_RADIUS = 10;
export const PURCHASE_BUTTON_BACKGROUND_COLOR = 'rgba(182,182,182,0.1)';
export const PURCHASE_BUTTON_MARGIN_TOP = 10;
export const PURCHASE_BUTTON_BORDER_WIDTH = 4;

export default StyleSheet.create({
  purchaseButton: {
    width: PURCHASE_BUTTON_WIDTH,
    height: PURCHASE_BUTTON_HEIGHT,
    borderRadius: PURCHASE_BUTTON_BORDER_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PURCHASE_BUTTON_BACKGROUND_COLOR,
    flexDirection: 'row',
    marginTop: PURCHASE_BUTTON_MARGIN_TOP,
    borderWidth: PURCHASE_BUTTON_BORDER_WIDTH,
    borderColor: '#3C3C3C',
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  purchaseSelectedButton: {
    borderWidth: 4,
    borderColor: theme.colors.main.primary,
    backgroundColor: '#563000',
  },
  popularTextContainer: {
    position: 'absolute',
    bottom: 16,
    right: 12,
    width: 50,
    height: 12,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: theme.colors.main.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  perWeekTextContainer: {
    position: 'absolute',
    bottom: 25,
    left: 2,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  perWeekText: {
    fontSize: 12,
    color: 'white',
    fontFamily: theme.font.semiBold,
  },
  leftContainer: {flex: 0.8},
  rightContainer: {
    flex: 0.2,
    height: 81,
    padding: 20,
    alignItems: 'flex-end',
  },
  popularText: {
    fontSize: 7,
    color: 'white',
    fontFamily: theme.font.semiBold,
  },
  purchaseButtonDurationText: {
    fontSize: 18,
    color: theme.colors.main.white,
    fontFamily: theme.font.regular,
    marginLeft: 8,
  },
  purchaseButtonDurationTextAndroid: {
    fontSize: 16,
    color: theme.colors.main.white,
    fontFamily: theme.font.regular,
    marginLeft: 8,
  },
  purchaseButtonPriceText: {
    fontSize: 25,
    marginLeft: 16,
    color: theme.colors.main.white,
    fontFamily: theme.font.bold,
  },
  purchaseButtonPriceTextAndroid: {
    fontSize: 20,
    marginLeft: 16,
    color: theme.colors.main.white,
    fontFamily: theme.font.bold,
  },
  infoText: {
    color: theme.colors.main.white,
    marginLeft: 16,
    fontSize: 10,
    fontFamily: theme.font.regular,
    marginTop: 5,
  },
  iconCheck: {
    width: 18,
    height: 18,
    position: 'absolute',
    top: 12,
    right: 12,
  },
});
