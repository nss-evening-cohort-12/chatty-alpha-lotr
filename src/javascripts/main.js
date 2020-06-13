import './components/messageCards.scss';
import builder from './components/messageCards';
import '../styles/main.scss';
import 'bootstrap';
import multiUsers from './components/multiUsers';
import navbar from './navbar/navbar';
import options from './components/options';

const init = () => {
  options.buildOptions();
  navbar.printNav();
  multiUsers.buildMultiUsers();
  builder.messageBuilder();
};

init();
