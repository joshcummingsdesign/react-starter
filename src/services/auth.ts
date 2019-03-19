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
    return new Promise<Auth0DecodedHash>((resolve, reject) => {
      this.webAuth.parseHash((err, decodedHash) => {
        if (decodedHash) {
          resolve(decodedHash);
        } else if (err) {
          reject(new Error(err.error));
        } else {
          reject(new Error('no_hash_found'));
        }
      });
    });
  }

  checkSession() {
    return new Promise<Auth0DecodedHash>((resolve, reject) => {
      this.webAuth.checkSession({}, (err, decodedHash?: Auth0DecodedHash) => {
        if (decodedHash) {
          resolve(decodedHash);
        } else if (err) {
          reject(new Error(err.error));
        } else {
          reject(new Error('no_hash_found'));
        }
      });
    });
  }
}

export default new AuthService();
