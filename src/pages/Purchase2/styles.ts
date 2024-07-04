import {StyleSheet} from 'react-native';
import {theme} from '../../constants/theme';
import {IS_IPHONE_MINI} from '../../constants';

export const PURCHASE_1_HORIZONTAL_PADDING = theme.spacing(5);

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background.purchase,
    flex: 1,
    paddingVertical: 20,
  },
  wizardIconContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wizardIcon: {
    color: theme.colors.main.primary,
  },
  title: {
    fontSize: 34,
    fontWeight: '600',
    color: theme.colors.main.white,
    marginLeft: PURCHASE_1_HORIZONTAL_PADDING,
    marginTop: theme.spacing(4),
  },
  infosContainer: {
    marginTop: theme.spacing(5),
  },
  infosContentContainer: {
    gap: theme.spacing(3),
  },
  purchaseButtonsContainer: {
    paddingHorizontal: PURCHASE_1_HORIZONTAL_PADDING,
    marginTop: theme.spacing(4),
    gap: theme.spacing(1),
  },
  continueButton: {
    width: 300,
    marginTop: IS_IPHONE_MINI() ? theme.spacing(4) : theme.spacing(5),
    backgroundColor: theme.colors.main.primary,
    alignSelf: 'center',
  },
  footer: {
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
  separator: {
    height: 50,
  },
});
