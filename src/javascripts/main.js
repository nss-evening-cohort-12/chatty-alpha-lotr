import 'bootstrap';

import '../styles/styles.scss';
import multiUsers from './components/multiUsers';

console.error('HIYA');

const init = () => {
  multiUsers.buildMultiUsers();
};

init();
