import {Platform} from 'react-native';
import axios from './index';

export const askToChatGpt = (messages: any) => {
  const url =
    Platform.OS === 'ios' ? '/gpt/chat/search/4o' : '/gpt/chat/search';
  return axios({
    method: 'POST',
    url,
    data: {messages},
  }).then((response: any) => response.data);
};
