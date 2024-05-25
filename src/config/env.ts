export default {
  BASE_URI: '/',
  ENV: process.env.REACT_APP_ENV || 'local',
  AXIS_SERVICE_URI:
    process.env.AXIS_SERVICE_URI || 'https://sherlogram.herokuapp.com',
  AXIS_SERVICE_API_KEY:
    process.env.AXIS_SERVICE_API_KEY || 'd2e621a6646a4211768cd68e26f21228a81',
};
