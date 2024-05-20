import axios from './index';

export const askToChatGpt = (messages: any) => {
  console.log('messages ->', messages);
  return axios({
    method: 'POST',
    url: '/gpt/chat/search',
    data: {messages},
  }).then((response: any) => response.data);
};

export const searchWebGpt = (prompt: string) => {
  return axios({
    method: 'POST',
    url: '/gpt/web/search',
    data: {prompt},
  }).then((response: any) => response.data);
};

export const getTrends = () => {
  return axios({
    method: 'GET',
    url: '/trend/create',
  }).then((response: any) => response.data);
};
