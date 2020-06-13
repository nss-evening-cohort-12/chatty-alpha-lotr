import './components/messageCards.scss';
import builder from './components/messageCards';
import '../styles/main.scss';
import 'bootstrap';
import multiUsers from './components/multiUsers';
import navbar from './navbar/navbar';

const init = () => {
  navbar.printNav();
  multiUsers.buildMultiUsers();
  builder.messageBuilder();
  navbar.deleteAll();
};

init();
