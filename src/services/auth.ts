import { WebAuth, Auth0DecodedHash } from 'auth0-js';
import config from '@src/config';

class AuthService {
  callbackUrl = `${config.url}/callback`;

  private webAuth = new WebAuth({
    domain: config.auth0Domain,
    clientID: config.auth0ClientId,
    redirectUri: this.callbackUrl,
    audience: config.auth0Audience,
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.webAuth.authorize();
  }

  logout() {
    this.webAuth.logout({
      returnTo: this.callbackUrl
    });
  }

  parseHash() {
    return new Promise<Auth0DecodedHash>((resolve, reject) => {
      this.webAuth.parseHash({}, (err, res) => {
        if (res && res.accessToken && res.idToken) {
          resolve(res);
        } else if (err) {
          reject(new Error(err.error));
        } else {
          reject(new Error('auth_tokens_not_found'));
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
          reject(new Error('auth_tokens_not_found'));
        }
      });
    });
  }

  changePassword(email: string) {
    const options = { email, connection: 'Username-Password-Authentication' };
    return new Promise<string>((resolve, reject) => {
      this.webAuth.changePassword(options, (err, res) => {
        if (err) {
          reject(new Error(err.code));
        } else {
          resolve(res);
        }
      });
    });
  }
}

export default new AuthService();
