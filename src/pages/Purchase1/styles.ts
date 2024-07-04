import {StyleSheet} from 'react-native';
import {theme} from '../../constants/theme';
import {IS_IPHONE_MINI, WIDTH} from '../../constants';

export default StyleSheet.create({
  mainBackground: {
    backgroundColor: theme.colors.background.purchase,
    flex: 1,
    padding: 24,
    paddingVertical: 20,
  },
  imagesContainer: {
    alignItems: 'center',
  },
  reviewView: {
    width: WIDTH - 64,
    marginTop: 42,
  },
  reviewImage: {
    marginTop: 16,
    width: WIDTH - 64,
    height: 90,
  },
  review2Image: {
    marginTop: 32,
    height: 84,
    marginBottom: theme.spacing(3),
  },
  reviewTitle: {
    fontSize: 20,
    color: theme.colors.main.white,
    fontFamily: theme.font.bold,
  },

  reviewCard: {
    marginTop: 36,
    width: WIDTH - 80,
    height: 220,
  },
  reviewCardImage: {
    width: WIDTH - 100,
    height: 220,
  },

  //FOOTER
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
  button: {
    width: 300,
    marginTop: IS_IPHONE_MINI() ? theme.spacing(3) : theme.spacing(4),
    backgroundColor: theme.colors.main.primary,
  },

  // DESC ITEM
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    height: 50,
  },
  imageContainer: {
    height: 40,
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 40,
    width: 40,
  },
  textContainer: {
    height: 40,
    flex: 0.8,
    marginLeft: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
    color: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    fontFamily: theme.font.semiBold,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
    fontFamily: theme.font.light,
    color: '#BCBCBC',
  },
  separator: {
    height: 50,
  },
});
