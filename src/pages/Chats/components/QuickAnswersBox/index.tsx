import {Text, View} from 'react-native';
import AnimatedPressable from '../../../../components/AnimatedPressable';
import styles from './styles';
import AnimatedView from '../../../../components/AnimatedView';
import {AnimatedValueType} from '../../../../types';
import useTranslation from '../../../../hooks/useTranslation';

enum HintTitles {
  ASK_FOR_ADVICE = 'ASK_FOR_ADVICE',
  HAVE_FUN = 'HAVE_FUN',
  WRITE_EDIT = 'WRITE_AND_EDIT',
  IMPROVE_HEALTH = 'IMPROVE_HEALTH',
  TALK_PHILOSOPHY = 'TALK_PHILOSOPHY',
}

type HintType = {
  title: HintTitles;
  questions: string[];
};

const HINTS: HintType[] = [
  {
    title: HintTitles.ASK_FOR_ADVICE,
    questions: ['STEP_BY_STEP_PLAN', 'HOW_TO_GET_PROMOTION'],
  },
  {
    title: HintTitles.HAVE_FUN,
    questions: ['TELL_ME_A_JOKE'],
  },
  {
    title: HintTitles.WRITE_EDIT,
    questions: ['ONE_PAGE_ESSAY_GATSBY'],
  },
  {
    title: HintTitles.IMPROVE_HEALTH,
    questions: ['HOURS_OF_SLEEP'],
  },
  {
    title: HintTitles.TALK_PHILOSOPHY,
    questions: ['MEANING_OF_LIFE'],
  },
];

type QuickAnswersBoxPropsType = {
  animatedValue: AnimatedValueType;
  navigation: any;
};

type HintBoxPropsType = {
  hint: HintType;
  animatedValue: AnimatedValueType;
  navigation: any;
};

const HintBox = ({hint, animatedValue, navigation}: HintBoxPropsType) => {
  const {t} = useTranslation('common', 'CHATS_PAGE.QUICK_ANSWER_BOX');

  return (
    <View style={styles.hintContainer}>
      <AnimatedView animatedValue={animatedValue}>
        <Text style={styles.hintText}>{t(hint.title)}</Text>
      </AnimatedView>
      {hint.questions.map((question: string, i: number) => (
        <AnimatedView animatedValue={animatedValue} key={i}>
          <AnimatedPressable
            key={i}
            onPress={() =>
              navigation.navigate('ChatsChatPage', {
                initialPrompt: question,
              })
            }
            style={styles.answerButton}>
            <Text style={styles.hintText}>{t(question)}</Text>
          </AnimatedPressable>
        </AnimatedView>
      ))}
    </View>
  );
};

const QuickAnswersBox = ({
  animatedValue,
  navigation,
}: QuickAnswersBoxPropsType) => {
  const {t} = useTranslation('common', 'CHATS_PAGE.QUICK_ANSWER_BOX');

  return (
    <View style={styles.container}>
      <AnimatedView animatedValue={animatedValue}>
        <Text style={styles.title}>{t('RECEIVE_QUICK_ANSWERS')}</Text>
      </AnimatedView>
      <View style={styles.hintsContainer}>
        {HINTS.map((hint: HintType, i: number) => (
          <HintBox
            navigation={navigation}
            key={i}
            hint={hint}
            animatedValue={animatedValue}
          />
        ))}
      </View>
    </View>
  );
};

export default QuickAnswersBox;
