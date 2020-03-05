require('dotenv');

const config = {
  apiUrl: process.env.REACT_APP_GRAPHQL || 'http://localhost:4301/admin/api',
};
export default config;
