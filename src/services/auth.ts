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
    return new Promise<Auth0DecodedHash | undefined>((resolve, reject) => {
      this.webAuth.parseHash((error, authResult) => {
        if (error) {
          reject(new Error(error.error));
        } else {
          resolve(authResult || undefined);
        }
      });
    });
  }

  checkSession() {
    return new Promise<Auth0DecodedHash | undefined>((resolve, reject) => {
      this.webAuth.checkSession({}, (error, authResult?: Auth0DecodedHash) => {
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
