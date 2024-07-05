import {Dimensions, Platform, StyleSheet} from 'react-native';
import {theme} from '../../constants/theme';

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#232126',
  },
  containerEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#232126',
  },
  containerKeyboard: {
    height: Platform.OS === 'ios' ? 120 : 100,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: theme.colors.main.grey,
  },
  bottomView: {
    flexDirection: 'row',
    width: WIDTH,
    paddingTop: 20,
    height: 70,
    backgroundColor: theme.colors.main.grey,
  },
  input: {
    flex: 4,
    borderColor: theme.colors.main.primary,
    height: 60,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    backgroundColor: theme.colors.main.white,
    paddingHorizontal: 16,
    fontWeight: '700',
  },
  sendButton: {
    flex: 1,
    height: 60,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    paddingRight: 7,
    backgroundColor: theme.colors.main.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendIcon: {
    width: 25,
    height: 25,
  },
  loader: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 999,
    backgroundColor: theme.colors.main.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 140,
    width: WIDTH,
  },
  sent: {
    backgroundColor: theme.colors.main.primary,
    alignSelf: 'flex-end',
    borderBottomEndRadius: 0,
  },
  received: {
    backgroundColor: theme.colors.main.grey,
    alignSelf: 'flex-start',
    borderEndStartRadius: 0,
  },
  chatBubble: {
    borderRadius: 20,
    paddingVertical: 12,
    marginBottom: 8,
    maxWidth: WIDTH / 2 + 80,
    paddingHorizontal: 16,
  },
  msgText: {
    fontFamily: theme.font.semiBold,
    fontSize: theme.spacing(2),
    color: theme.colors.main.white,
    letterSpacing: 0.2,
  },
  typingLoader: {
    width: 80,
    height: 20,
  },
  header: {
    height: Platform.OS === 'ios' ? (HEIGHT < 690 ? 70 : 50) : 50,
    width: WIDTH,
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 10,
  },
  settings: {
    height: 30,
    width: 30,
  },
  refresh: {
    height: 20,
    width: 20,
    marginTop: 5,
  },
  settingsButton: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  refreshButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeImage: {
    width: 200,
  },
  welcomeText: {
    color: theme.colors.main.primary,
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.2,
    marginBottom: 40,
  },
  finishDateText: {
    color: theme.colors.main.primary,
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0.2,
    marginLeft: 6,
    marginTop: 4,
  },
  finishDateAllText: {
    color: theme.colors.main.white,
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0.2,
    marginLeft: 6,
    marginTop: 4,
  },
});
