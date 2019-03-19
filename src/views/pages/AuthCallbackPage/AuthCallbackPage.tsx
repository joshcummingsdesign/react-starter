import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ReduxComponent } from '@src/state/types/redux';
import { finishLogin } from '@src/state/auth/actions';
import auth from '@src/services/auth';

class AuthCallbackPage extends ReduxComponent {
  state = { redirect: false, error: false };

  componentDidMount() {
    this.handleAuth();
  }

  render() {
    const { redirect, error } = this.state;
    if (error) {
      return <p>Login error</p>;
    } else if (redirect) {
      return <Redirect to='/' />;
    }
    return <p>Loading...</p>;
  }

  private handleAuth = async () => {
    try {
      const decodedHash = await auth.parseHash();
      if (decodedHash) {
        this.props.dispatch(finishLogin(decodedHash));
        this.setState({ redirect: true });
      } else {
        this.setState({ redirect: true });
      }
    } catch (error) {
      this.setState({ error: true });
    }
  };
}

export default connect()(AuthCallbackPage);
