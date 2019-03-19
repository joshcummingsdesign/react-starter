import React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import { RootState } from '@src/state/root';
import { ReduxComponent } from '@src/state/types/redux';
import { isAuthenticated, getExpiryTime } from '@src/state/auth/selectors';
import { login, logout, checkSession, renewSession } from '@src/state/auth/actions';

interface OwnProps extends RouteComponentProps {}

interface StateProps {
  isLoggedIn: boolean;
  expiresIn: number;
}

const defaultValue = {
  isLoggedIn: false,
  login: () => {},
  logout: () => {}
};

const AuthContext = React.createContext<typeof defaultValue>(defaultValue);

export const AuthConsumer = AuthContext.Consumer;

class AuthProvider extends ReduxComponent<StateProps, OwnProps> {
  componentDidMount() {
    this.checkSession();
  }

  componentDidUpdate(prevProps: OwnProps) {
    if (this.props.location !== prevProps.location) {
      this.checkSession();
    }
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <AuthContext.Provider value={{ isLoggedIn, login: this.login, logout: this.logout }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }

  private login = () => this.props.dispatch(login());

  private logout = () => this.props.dispatch(logout());

  private checkSession = () => {
    if (this.props.isLoggedIn) {
      this.props.dispatch(checkSession());
      if (this.props.expiresIn === 0) {
        this.renewSession();
      }
    }
  };

  private renewSession = () => this.props.dispatch(renewSession());
}

const mapStateToProps = ({ auth }: RootState): StateProps => ({
  isLoggedIn: isAuthenticated(auth),
  expiresIn: getExpiryTime(auth)
});

export default withRouter(connect(mapStateToProps)(AuthProvider));
