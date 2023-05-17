const DEV_API_URL = 'http://localhost:3000';
// const PROD_API_URL = 'https://bhagat-api.onrender.com';
const PROD_API_URL = 'https://api.bhagat.io';

const API_URL = (!location.href.includes('dev')) ? PROD_API_URL : DEV_API_URL; 

const DB_BACKUP = 'https://dbbackup.bhagat.io/website_backup.json'