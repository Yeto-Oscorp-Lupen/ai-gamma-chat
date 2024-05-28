import {useRef, useState, useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import {theme} from '../constants/theme';

export default function AnimatedTyping(props) {
  let [text, setText] = useState('');
  let [cursorColor, setCursorColor] = useState('transparent');
  let [messageIndex, setMessageIndex] = useState(0);
  let [textIndex, setTextIndex] = useState(0);
  let [timeouts, setTimeouts] = useState({
    cursorTimeout: undefined,
    typingTimeout: undefined,
    firstNewLineTimeout: undefined,
    secondNewLineTimeout: undefined,
  });

  let textRef = useRef(text);
  textRef.current = text;

  let cursorColorRef = useRef(cursorColor);
  cursorColorRef.current = cursorColor;

  let messageIndexRef = useRef(messageIndex);
  messageIndexRef.current = messageIndex;

  let textIndexRef = useRef(textIndex);
  textIndexRef.current = textIndex;

  let timeoutsRef = useRef(timeouts);
  timeoutsRef.current = timeouts;

  let typingAnimation = () => {
    if (textIndexRef.current < props.text[messageIndexRef.current]?.length) {
      setText(
        textRef.current +
          props.text[messageIndexRef.current].charAt(textIndexRef.current),
      );
      setTextIndex(textIndexRef.current + 1);

      let updatedTimeouts = {...timeoutsRef.current};
      updatedTimeouts.typingTimeout = setTimeout(typingAnimation, 3);
      setTimeouts(updatedTimeouts);
    } else if (messageIndexRef.current + 1 < props.text.length) {
      setMessageIndex(messageIndexRef.current + 1);
      setTextIndex(0);

      let updatedTimeouts = {...timeoutsRef.current};
      updatedTimeouts.firstNewLineTimeout = setTimeout(newLineAnimation, 50);
      updatedTimeouts.secondNewLineTimeout = setTimeout(newLineAnimation, 150);
      updatedTimeouts.typingTimeout = setTimeout(typingAnimation, 230);
      setTimeouts(updatedTimeouts);
    } else {
      clearInterval(timeoutsRef.current.cursorTimeout);
      setCursorColor('transparent');

      if (props.onComplete) {
        props.onComplete();
      }
    }
  };

  let newLineAnimation = () => {
    setText(textRef.current + '\n');
  };

  let cursorAnimation = () => {
    if (cursorColorRef.current === 'transparent') {
      setCursorColor('#E89005');
    } else {
      setCursorColor('transparent');
    }
  };

  useEffect(() => {
    let updatedTimeouts = {...timeoutsRef.current};
    updatedTimeouts.typingTimeout = setTimeout(typingAnimation, 500);
    updatedTimeouts.cursorTimeout = setInterval(cursorAnimation, 250);
    setTimeouts(updatedTimeouts);

    return () => {
      clearTimeout(timeoutsRef.current.typingTimeout);
      clearTimeout(timeoutsRef.current.firstNewLineTimeout);
      clearTimeout(timeoutsRef.current.secondNewLineTimeout);
      clearInterval(timeoutsRef.current.cursorTimeout);
    };
  }, []);

  return (
    <Text
      selectable
      selectionColor={'yellow'}
      style={[styles.text, props.style]}>
      {text}
      <Text style={{color: cursorColor, fontSize: theme.spacing(2)}}>|</Text>
    </Text>
  );
}

let styles = StyleSheet.create({
  text: {
    fontFamily: theme.font.semiBold,
    fontSize: theme.spacing(2),
    color: '#ffffff',
    letterSpacing: 0.2,
    alignSelf: 'stretch',
  },
});
