import {
  Image,
  ImageSourcePropType,
  Linking,
  ScrollView,
  Text,
  View,
} from 'react-native';
import AnimatedPressable from '../../../../components/AnimatedPressable';
import styles from './styles';
import AnimatedView from '../../../../components/AnimatedView';
import {AnimatedValueType} from '../../../../types';
import useTranslation from '../../../../hooks/useTranslation';

type HelpButton = {
  title: string;
  description: string;
  image: ImageSourcePropType;
  url?: string;
  firstMessage?: string;
  query?: string;
};

const HELP_BUTTONS_INFO: HelpButton[] = [
  {
    title: 'Image Generation',
    description: 'Turn words into image',
    image: require('../../../../assets/chats/generation.png'),
    url: 'https://apps.apple.com/us/app/deepart-ai-image-video/id6499373484',
  },
  {
    title: 'Social',
    description: 'Create an engaging post',
    image: require('../../../../assets/chats/social.png'),
    firstMessage: 'What do you want the post to be about?',
    query: 'Create an Instagram post about: {text}',
  },
  {
    title: 'Writing',
    description: 'Craft an essay',
    image: require('../../../../assets/chats/writing.png'),
    firstMessage: 'What’s the topic of your essay?',
    query: 'Write an essay on the following topic: {text}',
  },
  {
    title: 'Promotion',
    description: 'Draft an email',
    image: require('../../../../assets/chats/promotion.png'),
    firstMessage: 'What’s the purpose of the email?',
    query: 'Draft an email with the following purpose: {text}',
  },
  {
    title: 'Studying',
    description: 'Explain a theorem to me',
    image: require('../../../../assets/chats/studying.png'),
    firstMessage: 'What theorem would you like me to explain?',
    query: 'Explain the following theorem: {text}',
  },
  {
    title: 'Health',
    description: 'Create a training and meal plan',
    image: require('../../../../assets/chats/health.png'),
    firstMessage: 'What are your goals?',
    query: 'Create a training and meal plan for the following goals: {text}',
  },
];

type GetHelpBoxPropsType = {
  animatedValue: AnimatedValueType;
  navigation: any;
};

type HelpButtonPropsType = HelpButton & {
  item: any;
  index: number;
  animatedValue: AnimatedValueType;
  navigation: any;
};

const HelpButton = ({
  item,
  title,
  description,
  image,
  index,
  animatedValue,
  navigation,
}: HelpButtonPropsType) => {
  const isButtonLarge = index % 3 === 0;

  const presss = () => {
    if (item.url) {
      Linking.openURL(item.url);
    } else {
      navigation.navigate({
        name: 'TasksChatPage',
        params: {
          item,
        },
      });
    }
  };

  return (
    <AnimatedView animatedValue={animatedValue}>
      <AnimatedPressable
        style={[styles.button, isButtonLarge && styles.buttonLarge]}
        onPress={() => presss()}>
        <View
          style={[
            styles.buttonInfoContainer,
            isButtonLarge && styles.buttonInfoContainerForButtonLarge,
          ]}>
          <Text style={styles.buttonTitle}>{title}</Text>
          <Text style={styles.buttonDescription}>{description}</Text>
        </View>
        <Image
          resizeMode="contain"
          source={image}
          style={isButtonLarge ? styles.imageforButtonLarge : styles.image}
        />
      </AnimatedPressable>
    </AnimatedView>
  );
};

const GetHelpBox = ({animatedValue, navigation}: GetHelpBoxPropsType) => {
  const {t} = useTranslation('common', 'GET_HELP_BOX');

  return (
    <View style={styles.container}>
      <AnimatedView animatedValue={animatedValue}>
        <Text style={styles.title}>{t('GET_HELP_WITH_ANY_TASK')}</Text>
      </AnimatedView>
      <ScrollView
        horizontal
        contentContainerStyle={styles.buttonsScrollViewContentContainerStyle}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.buttonsContainer}>
          {HELP_BUTTONS_INFO.map((helpButtonInfo: HelpButton, i: number) => (
            <HelpButton
              key={i}
              item={helpButtonInfo}
              navigation={navigation}
              title={helpButtonInfo.title}
              description={helpButtonInfo.description}
              image={helpButtonInfo.image}
              index={i}
              animatedValue={animatedValue}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default GetHelpBox;
