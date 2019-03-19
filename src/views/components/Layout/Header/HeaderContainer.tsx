import React from 'react';
import { connect } from 'react-redux';
import { ReduxComponent } from '@state/types/redux';
import { login } from '@state/auth/actions';
import Header from '.';

class HeaderContainer extends ReduxComponent<{}> {
  render() {
    return <Header onLogin={this.handleClick} />;
  }

  private handleClick = () => this.props.dispatch(login());
}

export default connect()(HeaderContainer);
