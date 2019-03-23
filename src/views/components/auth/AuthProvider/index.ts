import { defaultValue } from './AuthProvider';

export type AuthProps = typeof defaultValue;
export { withAuth } from '../hoc/withAuth';
export { default, AuthConsumer } from './AuthProvider';
