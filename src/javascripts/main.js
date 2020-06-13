import './components/messageCards.scss';
import builder from './components/messageCards';
import '../styles/main.scss';
import 'bootstrap';
import multiUsers from './components/multiUsers';
import navbar from './navbar/navbar';
import options from './components/options';

const init = () => {  
  navbar.printNav();
  multiUsers.buildMultiUsers();
  options.buildOptions();
  builder.messageBuilder();
};

init();
