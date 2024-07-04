import {
  Image,
  ImageSourcePropType,
  Linking,
  ScrollView,
  Text,
  View,
} from 'react-native';
import AnimatedPressable from '../../../../components/AnimatedPressable';
import AnimatedView from '../../../../components/AnimatedView';
import useTranslation from '../../../../hooks/useTranslation';
import {AnimatedValueType} from '../../../../types';
import styles from './styles';

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
    title: 'IMAGE_GENERATION',
    description: 'TURN_WORDS_INTO_IMAGE',
    image: require('../../../../assets/chats/generation.png'),
    url: 'https://apps.apple.com/us/app/deepart-ai-image-video/id6499373484',
  },
  {
    title: 'SOCIAL',
    description: 'CREATE_AN_ENGAGING_POST',
    image: require('../../../../assets/chats/social.png'),
    firstMessage: 'CHATS_FIRST_MESSAGE_SOCIAL',
    query: 'CHATS_QUERY_SOCIAL',
  },
  {
    title: 'WRITING',
    description: 'CRAFT_AN_ESSAY',
    image: require('../../../../assets/chats/writing.png'),
    firstMessage: 'CHATS_FIRST_MESSAGE_WRITING',
    query: 'CHATS_QUERY_WRITING',
  },
  {
    title: 'PROMOTION',
    description: 'DRAFT_AN_EMAIL',
    image: require('../../../../assets/chats/promotion.png'),
    firstMessage: 'CHATS_FIRST_MESSAGE_PROMOTION',
    query: 'CHATS_QUERY_PROMOTION',
  },
  {
    title: 'STUDYING',
    description: 'EXPLAIN_A_THEOREM_TO_ME',
    image: require('../../../../assets/chats/studying.png'),
    firstMessage: 'CHATS_FIRST_MESSAGE_STUDYING',
    query: 'CHATS_QUERY_STUDYING',
  },
  {
    title: 'HEALTH',
    description: 'CREATE_A_TRAINING_AND_MEAL_PLAN',
    image: require('../../../../assets/chats/health.png'),
    firstMessage: 'CHATS_FIRST_MESSAGE_HEALTH',
    query: 'CHATS_QUERY_HEALTH',
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
  const {t} = useTranslation('common', 'CHATS_PAGE.GET_HELP_BOX');

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
              title={t(helpButtonInfo.title)}
              description={t(helpButtonInfo.description)}
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
