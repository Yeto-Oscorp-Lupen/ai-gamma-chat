import {Dimensions} from 'react-native';
import {theme} from './theme';
import {getLocales} from 'react-native-localize';

export const COMMON_ANIMATION_DURATION = 400;
export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

export const PAGE_TYPES = {
  IMAGE: 0,
  VIDEO: 1,
};

export const IS_IPHONE_MINI = () => HEIGHT < 700;

export const MAIN_HORIZONTAL_WIDTH = theme.spacing(3);

export const LOADING_DESCRIPTIONS: string[] = [
  'Your AI is thinking... or perhaps critiquing art, not sure which.',
  'Our pixels are working without breaking a sweat!',
  "Something magical is about to come off our canvas... It's not a rabbit, it's artwork!",
  'Your picture is in the oven, almost ready to be served!',
  'Our inkfish is making the final touches... and yes, the ink is real!',
  'Your visual is being prepared... And yes, our speed is totally legal!',
];

export const DUMMY_IMAGES = [
  {
    imageUrl: 'https://d2arv2kac3ncdg.cloudfront.net/dummy1.png',
    isLock: true,
  },
  {
    imageUrl: 'https://d2arv2kac3ncdg.cloudfront.net/dummy2.png',
    isLock: true,
  },
  {
    imageUrl: 'https://d2arv2kac3ncdg.cloudfront.net/dummy3.png',
    isLock: true,
  },
];

export const PHONE_LANGUAGE = getLocales()[0].languageCode;
