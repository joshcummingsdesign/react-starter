import { createCanBoundTo } from '@casl/react';
import ability from '@src/config/ability';

/**
 * The Can component is used to selectively show content based on user
 * permissions throughout the application.
 * See: https://github.com/stalniy/casl-react-example
 */
const Can = createCanBoundTo(ability);

export default Can;
