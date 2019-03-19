import React from 'react';
import { connect } from 'react-redux';
import { ReduxComponent } from '@state/types/redux';
import { login, logout } from '@state/auth/actions';
import Header from '.';

class HeaderContainer extends ReduxComponent {
  render() {
    return <Header onLogin={this.handleLogin} onLogout={this.handleLogout} />;
  }

  private handleLogin = () => this.props.dispatch(login('/profile'));

  private handleLogout = () => this.props.dispatch(logout());
}

export default connect()(HeaderContainer);
