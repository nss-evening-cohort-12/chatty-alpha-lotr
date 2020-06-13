import utils from '../helpers/utils';
import logo from '../assets/onering.png';
import './navbar.scss';
import addMessage from '../helpers/addMessage';
import messageCards from '../components/messageCards';

const printNav = () => {
  const domString = `<div id="navcontainer" class="d-flex justify-content-center"><div id="logodiv"><img id="logo" class="offset-7" src="${logo}" width="50px" height="50px" alt="one ring logo"></div>
  <div class="input-group col-8">
  <input id="messageText" class="form-control m-1" aria-label="With textarea" placeholder="Hit Enter to Send"></input>
  </div>
  <button class="m-1 btn btn-light" id="clearButton">Clear Messages</button> 
  </div>`;
  utils.printToDom('#navbar', domString);
  document.querySelector('#navbar').addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      addMessage.addMessage();
      messageCards.messageBuilder();
    }
  });
};

export default { printNav };
