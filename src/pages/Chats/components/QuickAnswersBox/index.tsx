import {Text, View} from 'react-native';
import AnimatedPressable from '../../../../components/AnimatedPressable';
import styles from './styles';
import AnimatedView from '../../../../components/AnimatedView';
import {AnimatedValueType} from '../../../../types';

enum HintTitles {
  ASK_FOR_ADVICE = 'Ask for Advice',
  HAVE_FUN = 'Have Fun',
  WRITE_EDIT = 'Write & Edit',
  IMPROVE_HEALTH = 'Improve Health',
  TALK_PHILOSOPHY = 'Talk Philosophy',
}

type HintType = {
  title: HintTitles;
  questions: string[];
};

const HINTS: HintType[] = [
  {
    title: HintTitles.ASK_FOR_ADVICE,
    questions: [
      'Give me a step-by-step plan to get rich',
      'How can I get a promotion?',
    ],
  },
  {
    title: HintTitles.HAVE_FUN,
    questions: ['Tell me a joke'],
  },
  {
    title: HintTitles.WRITE_EDIT,
    questions: ['Create a one-page essay on The Great Gatsby'],
  },
  {
    title: HintTitles.IMPROVE_HEALTH,
    questions: ['How many hours of sleep does a person need?'],
  },
  {
    title: HintTitles.TALK_PHILOSOPHY,
    questions: ['What is the meaning of life?'],
  },
];

type QuickAnswersBoxPropsType = {
  animatedValue: AnimatedValueType;
};

type HintBoxPropsType = {
  hint: HintType;
  animatedValue: AnimatedValueType;
};

const HintBox = ({hint, animatedValue}: HintBoxPropsType) => (
  <View style={styles.hintContainer}>
    <AnimatedView animatedValue={animatedValue}>
      <Text style={styles.hintText}>{hint.title}</Text>
    </AnimatedView>
    {hint.questions.map((question: string, i: number) => (
      <AnimatedView animatedValue={animatedValue}>
        <AnimatedPressable
          key={i}
          onPress={() => console.log('pressed')}
          style={styles.answerButton}>
          <Text style={styles.hintText}>{question}</Text>
        </AnimatedPressable>
      </AnimatedView>
    ))}
  </View>
);

const QuickAnswersBox = ({animatedValue}: QuickAnswersBoxPropsType) => (
  <View style={styles.container}>
    <AnimatedView animatedValue={animatedValue}>
      <Text style={styles.title}>Get Help with Any Task</Text>
    </AnimatedView>
    <View style={styles.hintsContainer}>
      {HINTS.map((hint: HintType, i: number) => (
        <HintBox key={i} hint={hint} animatedValue={animatedValue} />
      ))}
    </View>
  </View>
);

export default QuickAnswersBox;
