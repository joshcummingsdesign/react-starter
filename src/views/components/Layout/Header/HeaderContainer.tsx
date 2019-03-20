import React from 'react';
import Header from '.';
import { AuthConsumer } from '../../auth/AuthProvider';

const HeaderContainer = () => <AuthConsumer>{props => <Header {...props} />}</AuthConsumer>;

export default HeaderContainer;
