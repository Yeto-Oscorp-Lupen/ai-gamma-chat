import {Image, ImageSourcePropType, ScrollView, Text, View} from 'react-native';
import AnimatedPressable from '../../../../components/AnimatedPressable';
import styles from './styles';
import AnimatedView from '../../../../components/AnimatedView';
import {AnimatedValueType} from '../../../../types';

type HelpButton = {
  title: string;
  description: string;
  image: ImageSourcePropType;
};

const HELP_BUTTONS_INFO: HelpButton[] = [
  {
    title: 'Image Generation',
    description: 'Turn words into image',
    image: require('../../../../assets/chats/generation.png'),
  },
  {
    title: 'Social',
    description: 'Create an engaging post',
    image: require('../../../../assets/chats/social.png'),
  },
  {
    title: 'Writing',
    description: 'Craft an essay',
    image: require('../../../../assets/chats/writing.png'),
  },
  {
    title: 'Promotion',
    description: 'Draft an email',
    image: require('../../../../assets/chats/promotion.png'),
  },
  {
    title: 'Studying',
    description: 'Explain a theorem to me',
    image: require('../../../../assets/chats/studying.png'),
  },
  {
    title: 'Health',
    description: 'Create a training and meal plan',
    image: require('../../../../assets/chats/health.png'),
  },
];

type GetHelpBoxPropsType = {
  animatedValue: AnimatedValueType;
};

type HelpButtonPropsType = HelpButton & {
  index: number;
  animatedValue: AnimatedValueType;
};

const HelpButton = ({
  title,
  description,
  image,
  index,
  animatedValue,
}: HelpButtonPropsType) => {
  const isButtonLarge = index % 3 === 0;

  return (
    <AnimatedView animatedValue={animatedValue}>
      <AnimatedPressable
        style={[styles.button, isButtonLarge && styles.buttonLarge]}
        onPress={() => console.log('pressed')}>
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

const GetHelpBox = ({animatedValue}: GetHelpBoxPropsType) => (
  <View style={styles.container}>
    <AnimatedView animatedValue={animatedValue}>
      <Text style={styles.title}>Get Help with Any Task</Text>
    </AnimatedView>
    <ScrollView
      horizontal
      contentContainerStyle={styles.buttonsScrollViewContentContainerStyle}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.buttonsContainer}>
        {HELP_BUTTONS_INFO.map((helpButtonInfo: HelpButton, i: number) => (
          <HelpButton
            key={i}
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

export default GetHelpBox;
