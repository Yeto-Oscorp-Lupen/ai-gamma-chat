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
  buttonsScrollViewContentContainerStyle: {
    paddingHorizontal: 16,
  },
  buttonsContainer: {
    flexWrap: 'wrap',
    gap: 20,
    height: 222,
  },
  button: {
    height: 100,
    width: 145,
    backgroundColor: theme.colors.main.secondary,
    borderRadius: 10,
    padding: 16,
  },
  buttonLarge: {
    height: 222,
    width: 150,
  },
  buttonInfoContainer: {
    flexDirection: 'column',
    gap: 3,
    maxWidth: 80,
  },
  buttonInfoContainerForButtonLarge: {
    flexDirection: 'column',
    gap: 3,
    maxWidth: 110,
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.main.white,
  },
  buttonDescription: {
    fontSize: 12,
    fontWeight: '400',
    color: theme.colors.main.gray,
  },
  image: {
    width: 40,
    height: 50,
    position: 'absolute',
    top: '40%',
    right: 8,
  },
  imageforButtonLarge: {
    width: 70,
    height: 80,
    position: 'absolute',
    bottom: 16,
    right: 10,
  },
});
