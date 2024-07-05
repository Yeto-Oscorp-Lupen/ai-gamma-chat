import {Platform, StyleSheet} from 'react-native';
import {theme} from '../../constants/theme';
import {WIDTH} from '../../constants';

export const TAB_BAR_HEIGHT = Platform.OS === 'ios' ? 86 : 66;

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
    height: TAB_BAR_HEIGHT,
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: WIDTH / 3.5,
    paddingTop: 12,
    backgroundColor: theme.colors.background.secondary,
    position: 'absolute',
    bottom: 0,
  },
});
