const DEV_API_URL = 'http://localhost:3000';
const PROD_API_URL = 'https://bhagat-api.herokuapp.com';

const API_URL = (location.hostname === 'bhagat.io')? PROD_API_URL: DEV_API_URL;