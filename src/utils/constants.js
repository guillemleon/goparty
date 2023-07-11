const SERVER_IP_DEVELOP = '192.168.1.33:8000';
const SERVER_IP_PROD = 'goparty-server-develop-79027189d4a9.herokuapp.com';
const API_KEY = 'AIzaSyCeN4uIbXCBvc7MRmUig_EHWoMihHdwjuQ';

export const ENV = {
  BASE_PATH: `http://${SERVER_IP_DEVELOP}`,
  BASE_API: `http://${SERVER_IP_DEVELOP}/api`,
  API_ROUTES: {
    REGISTER_CUSTOMER: 'auth/register/customer',
    REGISTER_COMPANY: 'auth/register/company',
    LOGIN: 'auth/login',
    REFRESH_TOKEN: 'auth/refresh_token',
    EVENTS: 'event',
  },
  JWT: {
    ACCESS: 'access',
    REFRESH: 'refresh',
  },
  API_KEY: API_KEY,
};
