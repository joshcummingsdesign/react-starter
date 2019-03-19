import React from 'react';
import { connect } from 'react-redux';
import { ReduxComponent } from '@state/types/redux';
import { login, logout } from '@state/auth/actions';
import Header from '.';
import { RootState } from '@src/state/root';
import { isAuthenticated } from '@src/state/auth/selectors';

interface StateProps {
  isLoggedIn: boolean;
}

class HeaderContainer extends ReduxComponent<StateProps> {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <Header isLoggedIn={isLoggedIn} onLogin={this.handleLogin} onLogout={this.handleLogout} />
    );
  }

  private handleLogin = () => this.props.dispatch(login('/profile'));

  private handleLogout = () => this.props.dispatch(logout());
}

const mapStateToProps = ({ auth }: RootState): StateProps => ({
  isLoggedIn: isAuthenticated(auth)
});

export default connect(mapStateToProps)(HeaderContainer);
