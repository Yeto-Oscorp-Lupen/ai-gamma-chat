import {StyleSheet} from 'react-native';
import {theme} from '../../constants/theme';
import {WIDTH} from '../../constants';

export default StyleSheet.create({
  container: {
    width: WIDTH / 2 - theme.spacing(2.7),
    minHeight: WIDTH / 2 - theme.spacing(2.7) - 50,
    backgroundColor: theme.colors.main.grey,
    padding: 10,
    margin: theme.spacing(1),
    borderRadius: theme.spacing(1.2),
  },
  image: {
    marginTop: theme.spacing(0.5),
    width: 34,
    height: 34,
  },
  imageText: {
    marginTop: theme.spacing(0.5),
    fontSize: 34,
  },
  nameText: {
    fontFamily: theme.font.bold,
    fontSize: 20,
    color: theme.colors.main.white,
    marginTop: theme.spacing(0.5),
  },
  descText: {
    fontFamily: theme.font.regular,
    fontSize: 12,
    color: theme.colors.grey[500],
  },
});
