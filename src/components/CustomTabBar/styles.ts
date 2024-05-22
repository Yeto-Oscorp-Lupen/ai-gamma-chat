import {StyleSheet} from 'react-native';
import {theme} from '../../constants/theme';
import {WIDTH} from '../../constants';

export default StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  focusedTextView: {
    borderWidth: 2,
    alignItems: 'center',
  },
  unfocusedTextView: {
    borderWidth: 2,
    alignItems: 'center',
  },
  mainDiv: {
    flexDirection: 'row',
    width: WIDTH,
    height: 86,
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: WIDTH / 3,
    paddingTop: 12,
    backgroundColor: theme.colors.background.secondary,
    position: 'absolute',
    bottom: 0,
  },
});
