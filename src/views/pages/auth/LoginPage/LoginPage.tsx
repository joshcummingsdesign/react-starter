import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { ReduxComponent } from '@src/state/types/redux';
import { login } from '@src/state/auth/actions';

class LoginPage extends ReduxComponent {
  componentDidMount() {
    this.props.dispatch(login());
  }

  render() {
    return <Fragment />;
  }
}

export default connect()(LoginPage);
