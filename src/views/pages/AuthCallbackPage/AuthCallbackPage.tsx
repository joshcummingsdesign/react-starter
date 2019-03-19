import React from 'react';
import { connect } from 'react-redux';
import { ReduxComponent } from '@src/state/types/redux';
import { login, finishLogin } from '@src/state/auth/actions';

interface StateProps {
  errorMessage: string;
}

class AuthCallbackPage extends ReduxComponent<StateProps> {
  componentDidMount() {
    this.props.dispatch(finishLogin());
  }

  render() {
    const { errorMessage } = this.props;
    if (errorMessage) {
      return (
        <div>
          <p>The was an issue when logging in.</p>
          <button onClick={this.handleRetry}>Try again</button>
        </div>
      );
    }
    return <p>Loading...</p>;
  }

  private handleRetry = () => this.props.dispatch(login());
}

const mapStateToProps = (): StateProps => ({
  errorMessage: ''
});

export default connect(mapStateToProps)(AuthCallbackPage);
