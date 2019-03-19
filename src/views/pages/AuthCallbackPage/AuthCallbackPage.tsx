import React from 'react';
import { connect } from 'react-redux';
import { ReduxComponent } from '@src/state/types/redux';
import { finishLogin } from '@src/state/auth/actions';

class AuthCallbackPage extends ReduxComponent {
  componentDidMount() {
    this.props.dispatch(finishLogin());
  }

  render() {
    return <p>Loading...</p>;
  }
}

export default connect()(AuthCallbackPage);
