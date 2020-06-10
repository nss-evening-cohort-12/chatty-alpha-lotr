import '../styles/main.scss';
import 'bootstrap';
import multiUsers from './components/multiUsers';

console.error('HIYA');

const init = () => {
  multiUsers.buildMultiUsers();
};

init();
