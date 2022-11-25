const DEV_API_URL = 'http://localhost:3000';
const PROD_API_URL = 'https://bhagat-api.onrender.com';

const API_URL = (!location.href.includes('dev'))? PROD_API_URL: DEV_API_URL;