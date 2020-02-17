require('dotenv');

const config = {
  apiUrl: process.env.REACT_APP_GRAPHQL || 'http://localhost:3000/admin/api',
};
export default config;
