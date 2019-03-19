import { WebAuth, Auth0DecodedHash } from 'auth0-js';
import config from '@src/config';

class AuthService {
  private webAuth = new WebAuth({
    domain: config.auth0Domain,
    clientID: config.auth0ClientId,
    redirectUri: `${config.url}/callback`,
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.webAuth.authorize();
  }

  parseHash() {
    return new Promise<Auth0DecodedHash | null>((resolve, reject) => {
      this.webAuth.parseHash((error, authResult) => {
        if (error) {
          reject(new Error(error.error));
        } else {
          resolve(authResult);
        }
      });
    });
  }
}

export default new AuthService();
