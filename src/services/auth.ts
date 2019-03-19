import { WebAuth } from 'auth0-js';
import config from '@src/config';

class AuthService {
  webAuth = new WebAuth({
    domain: config.auth0Domain,
    clientID: config.auth0ClientId,
    redirectUri: `${config.url}/callback`,
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.webAuth.authorize();
  }
}

export default new AuthService();
