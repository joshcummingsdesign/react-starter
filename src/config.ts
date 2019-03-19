const config = {
  apiUrl: process.env.REACT_APP_API_URL || '',
  url: process.env.REACT_APP_URL || '',
  auth0Domain: process.env.REACT_APP_AUTH0_DOMAIN || '',
  auth0ClientId: process.env.REACT_APP_AUTH0_CLIENT_ID || ''
};

export default config;
