import '../styles/styles.scss';
import './components/messageCards.scss';
import builder from './components/messageCards';
import '../styles/main.scss';
import 'bootstrap';
import multiUsers from './components/multiUsers';
import navbar from './navbar/navbar';

const init = () => {
  builder.messageBuilder();
  navbar.printNav();
  multiUsers.buildMultiUsers();
};

init();
