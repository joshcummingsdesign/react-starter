import React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import { RootState } from '@src/state/root';
import { ReduxComponent } from '@src/state/types/redux';
import { isAuthenticated } from '@src/state/auth/selectors';
import { login, logout, renewSession } from '@src/state/auth/actions';

interface OwnProps extends RouteComponentProps {}

interface StateProps {
  isLoggedIn: boolean;
  isAuthenticated: boolean;
}

interface State {
  isLoading: boolean;
}

export const defaultValue = {
  isAuthenticated: false,
  login: (location?: string) => console.log(location),
  logout: (location?: string) => console.log(location)
};

const AuthContext = React.createContext<typeof defaultValue>(defaultValue);

export const AuthConsumer = AuthContext.Consumer;

class AuthProvider extends ReduxComponent<StateProps, OwnProps, State> {
  state = { isLoading: false };

  componentDidMount() {
    const { isLoggedIn, isAuthenticated } = this.props;
    if (isLoggedIn) {
      if (isAuthenticated) {
        this.renewSession();
      } else {
        this.logout();
      }
    }
  }

  render() {
    const { isAuthenticated, children } = this.props;
    const { isLoading } = this.state;
    const { login, logout } = this;
    return (
      <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
        {isLoading ? <p>Loading...</p> : children}
      </AuthContext.Provider>
    );
  }

  private login = (location?: string) => {
    this.setState({ isLoading: true });
    this.props.dispatch(login(location));
  };

  private logout = (location?: string) => {
    this.setState({ isLoading: true });
    this.props.dispatch(logout(location));
  };

  private renewSession = () => this.props.dispatch(renewSession());
}

const mapStateToProps = ({ auth }: RootState): StateProps => ({
  isLoggedIn: auth.isLoggedIn,
  isAuthenticated: isAuthenticated(auth)
});

export default withRouter(connect(mapStateToProps)(AuthProvider));
