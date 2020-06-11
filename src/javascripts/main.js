import '../styles/main.scss';
import 'bootstrap';
import multiUsers from './components/multiUsers';
import navbar from './navbar/navbar';

console.error('HIYA');

const init = () => {
  navbar.printNav();
  multiUsers.buildMultiUsers();
};

init();
