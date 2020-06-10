import '../styles/styles.scss';
import './components/messageCards.scss';
import 'bootstrap';

// import multiUsers from './components/multiUsers';
import builder from './components/messageCards';

console.error('HIYA');

const init = () => {
  builder.messageBuilder();
  // multiUsers.buildMultiUsers();
};

init();
