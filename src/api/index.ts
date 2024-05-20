import axios from 'axios';
import {env} from '../config';
import authInterceptor from './axiosAuthInterceptor';

const instance = axios.create({baseURL: `${env.AXIS_SERVICE_URI}`});

authInterceptor(instance);

export default instance;
