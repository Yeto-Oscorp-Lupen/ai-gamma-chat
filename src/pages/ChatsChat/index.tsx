import {useCallback, useEffect, useRef, useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {askToChatGpt} from '../../api/chatGPT';
import PromptInput from '../../components/PromptInput';
import {setFreeRight} from '../../store/features/appSlice';
import {vibrate} from '../../utils';
import AnimatedTyping from '../../utils/AnimatedTyping';
import styles from './styles';
import {Refresh} from '../../components/Icons';

const ChatsChatPage = ({route, navigation}: any) => {
  const dispatch = useDispatch();
  const {initialPrompt} = route.params;
  const scrollRef = useRef<ScrollView>(null);
  const {isSubs, freeRights} = useSelector((state: any) => state.app);

  const [question, setQuestion] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [conversation, setConversation] = useState<any>([]);

  useEffect(() => {
    console.log('initialPrompt', initialPrompt);
    if (initialPrompt) {
      setQuestion(initialPrompt);
      handleSubmit();
    }
  }, []);

  const setNewRightCount = async () => {
    dispatch(setFreeRight(freeRights - 1));
    // setFreeRightsFromStorage(freeRights - 1);
  };

  const handleSubmit = useCallback(async () => {
    vibrate();
    // if (!isSubs) {
    //   navigation.navigate('Purchase');
    //   return false;
    // }

    if (question?.length) {
      setTimeout(() => scrollRef?.current?.scrollToEnd({animated: true}), 200);

      const newConversation = [
        ...conversation,
        {role: 'user', content: question},
      ];

      setConversation(newConversation);
      setQuestion('');
      setIsLoading(true);
      const answer = await askToChatGpt(newConversation);

      setNewRightCount();
      setIsLoading(false);
      setConversation([...newConversation, answer]);
      setTimeout(() => scrollRef?.current?.scrollToEnd({animated: true}), 200);
    }
  }, [question, conversation]);

  const refresh = async () => {
    if (!isSubs && !freeRights) {
      navigation.navigate('Purchase');
      return false;
    }
    setQuestion('');
    setConversation([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.refreshButton} onPress={refresh}>
          <Refresh style={styles.refresh} width={20} height={20} />
        </TouchableOpacity>
      </View>
      {Object?.keys(conversation)?.length === 0 ? (
        <View style={styles.containerEmpty}>
          <Text style={styles.welcomeText}>Welcome to the AI Chatbot!</Text>
        </View>
      ) : (
        <ScrollView
          ref={scrollRef}
          keyboardDismissMode="interactive"
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'always'}
          contentContainerStyle={styles.scrollView}>
          {conversation.map((message: any, index: number) => {
            if (message?.role === 'user') {
              return (
                <View
                  key={`user${index}`}
                  style={[styles.sent, styles.chatBubble]}>
                  <Text
                    selectable
                    selectionColor={'purple'}
                    style={styles.msgText}>
                    {message?.content}
                  </Text>
                </View>
              );
            }
            return (
              <View
                key={`assistant${index}`}
                style={[styles.received, styles.chatBubble]}>
                <AnimatedTyping text={[message?.content]} />
              </View>
            );
          })}
          {isLoading && (
            <View
              key={'typingLoader'}
              style={[styles.received, styles.chatBubble]}>
              <Image
                resizeMode="contain"
                source={require('../../assets/chat/typing.gif')}
                style={styles.typingLoader}
              />
            </View>
          )}
        </ScrollView>
      )}
      <KeyboardAvoidingView
        style={styles.containerKeyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={100}>
        <View style={[styles.bottomView]}>
          <PromptInput
            text={question}
            placeholder={'Type your message here....'}
            onChangeText={setQuestion}
            onSubmitEditing={handleSubmit}
            isLoading={isLoading}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChatsChatPage;
