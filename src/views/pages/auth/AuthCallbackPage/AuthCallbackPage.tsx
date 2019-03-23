import React from 'react';
import { connect } from 'react-redux';
import { ReduxComponent } from '@state/types/redux';
import { handleAuth } from '@state/auth/actions';

interface StateProps {
  errorMessage?: string;
}

class AuthCallbackPage extends ReduxComponent<{}, StateProps> {
  componentDidMount() {
    this.props.dispatch(handleAuth());
  }

  render() {
    return <p>Loading...</p>;
  }
}

export default connect()(AuthCallbackPage);
