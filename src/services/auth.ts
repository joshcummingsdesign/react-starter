import { WebAuth, Auth0DecodedHash } from 'auth0-js';
import config from '@src/config';

class AuthService {
  private webAuth = new WebAuth({
    domain: config.auth0Domain,
    clientID: config.auth0ClientId,
    redirectUri: `${config.url}/login/callback`,
    responseType: 'token id_token',
    audience: config.auth0Audience,
    scope: 'openid'
  });

  login() {
    this.webAuth.authorize();
  }

  logout(location?: string) {
    this.webAuth.logout({
      returnTo: `${config.url}/${location || ''}`
    });
  }

  parseHash() {
    return new Promise<Auth0DecodedHash>((resolve, reject) => {
      this.webAuth.parseHash((err, res) => {
        if (res && res.accessToken && res.idToken) {
          resolve(res);
        } else if (err) {
          reject(new Error(err.error));
        } else {
          reject(new Error('no_tokens_found'));
        }
      });
    });
  }

  checkSession() {
    return new Promise<Auth0DecodedHash>((resolve, reject) => {
      this.webAuth.checkSession({}, (err, res) => {
        if (res && res.accessToken && res.idToken) {
          resolve(res);
        } else if (err) {
          reject(new Error(err.error));
        } else {
          reject(new Error('no_tokens_found'));
        }
      });
    });
  }

  changePassword(email: string) {
    return new Promise<string>((resolve, reject) => {
      this.webAuth.changePassword(
        {
          connection: 'Username-Password-Authentication',
          email
        },
        (err, res) => {
          if (err) {
            reject(new Error(err.code));
          } else {
            resolve(res);
          }
        }
      );
    });
  }
}

export default new AuthService();
