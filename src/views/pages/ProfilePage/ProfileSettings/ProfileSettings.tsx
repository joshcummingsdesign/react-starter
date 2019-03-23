import React, { Component } from 'react';
import auth from '@services/auth';

interface State {
  isLoading: boolean;
  email: string;
  message: string;
}

class ProfileSettings extends Component<{}, State> {
  state = { isLoading: false, email: '', message: '' };

  render() {
    const { isLoading, email, message } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          onChange={this.handleInputChange}
          value={email}
          placeholder='Email'
          disabled={isLoading}
        />
        <input
          type='submit'
          value={isLoading ? 'Loading...' : `Change Password`}
          disabled={isLoading}
        />
        {message && <p>{message}</p>}
      </form>
    );
  }

  private handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ email: e.currentTarget.value });

  private handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    const { email } = this.state;
    try {
      const message = await auth.changePassword(email);
      this.setState({ isLoading: false, email: '', message });
    } catch (error) {
      this.setState({ isLoading: false, message: error.message });
    }
  };
}

export default ProfileSettings;
