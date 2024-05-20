import {env} from '../config';

export default function authInterceptor(instance: any) {
  instance.interceptors.request.use(async (config: {headers: any}) => {
    Object.assign(config.headers, {
      api_key: env.AXIS_SERVICE_API_KEY,
    });
    return config;
  });
}
