import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import { RootState } from '@src/state/root';
import { ReduxComponent } from '@src/state/types/redux';
import { checkSession, renewSession } from '@src/state/auth/actions';
import { isAuthenticated, getExpiryTime } from '@src/state/auth/selectors';

interface OwnProps extends RouteComponentProps {}

interface StateProps {
  isLoggedIn: boolean;
  expiresIn: number;
}

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
    return <Fragment />;
  }

  private checkSession = () => {
    if (this.props.isLoggedIn) {
      this.props.dispatch(checkSession());
      if (this.props.expiresIn < 7141729) {
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
