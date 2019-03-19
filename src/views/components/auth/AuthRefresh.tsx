import React from 'react';
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

class AuthRefresh extends ReduxComponent<StateProps, OwnProps> {
  componentDidMount() {
    this.checkSession();
  }

  componentDidUpdate(prevProps: OwnProps) {
    if (this.props.location !== prevProps.location) {
      this.checkSession();
    }
  }

  private checkSession = () => {
    if (this.props.isLoggedIn) {
      this.props.dispatch(checkSession());
      if (this.props.expiresIn === 0) {
        this.renewSession();
      }
    }
  };

  private renewSession = () => this.props.dispatch(renewSession());

  render() {
    return <></>;
  }
}

const mapStateToProps = ({ auth }: RootState): StateProps => ({
  isLoggedIn: isAuthenticated(auth),
  expiresIn: getExpiryTime(auth)
});

export default withRouter(connect(mapStateToProps)(AuthRefresh));
