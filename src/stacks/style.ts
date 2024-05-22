import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../constants/theme';

export const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    height: 40,
    width: WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonIcon: {
    color: theme.colors.main.white,
  },
  backImage: {
    height: 20,
    width: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: '#FFF',
    marginLeft: 10,
  },
  settingsButton: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  settingsImage: {
    height: 20,
    width: 20,
  },
  logo: {width: 65, height: 16, marginLeft: 5},
});
