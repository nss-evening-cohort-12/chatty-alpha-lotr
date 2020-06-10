import 'bootstrap';
import '../styles/styles.scss';
import multiUsers from './components/multiUsers';
import navbar from './navbar/navbar';

console.error('HIYA');

const init = () => {
  navbar.printNav();
  multiUsers.buildMultiUsers();
};

init();
