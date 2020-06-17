import logo from '../assets/onering.png';
import './navbar.scss';
import addMessage from '../helpers/addMessage';
import messageCards from '../components/messageCards';
import data from '../helpers/data/messageData';
import utils from '../helpers/utils';
import emojiData from '../helpers/data/emojiData';

const addMyEmojie = () => {
  let myValue = '';
  myValue = $('#emojis :selected').text();
  document.querySelector('#messageText').value += myValue;
  const myEmoji = emojiData.getEmoji();
  let domString = `
  <label for="cars"></label>
  <select class="pleaseWork" id="emojis">
  <option selected disabled hidden style='display: none' value=''>😀</option>
  `;
  for (let i = 0; i < myEmoji.length; i += 1) {
    domString += `
    <option value="${String.fromCodePoint(myEmoji[i])}">${String.fromCodePoint(myEmoji[i])}</option>    
    `;
  }
  domString += `
  </select>
  `;
  utils.printToDom('#buildemoji', domString);
  $('#messageText').focus();
};

const printNav = () => {
  const myEmoji = emojiData.getEmoji();
  let domString = `<div id="navcontainer" class="d-flex justify-content-center"><div id="logodiv"><img id="logo" class="offset-7" src="${logo}" width="75px" height="75px" alt="one ring logo"></div>
  <div class="input-group col-8">
  <input id="messageText" class="form-control m-1" aria-label="With textarea" placeholder="Hit Enter to Send"></input>
  <form id="buildemoji">
  <label for="cars"></label>
  <select class="pleaseWork" id="emojis">
  <option selected disabled hidden style='display: none' value=''>😀</option>  
  `;
  for (let i = 0; i < myEmoji.length; i += 1) {
    domString += `
    <option value="${String.fromCodePoint(myEmoji[i])}">${String.fromCodePoint(myEmoji[i])}</option>
    `;
  }
  domString += `
  </select>
  </form>
  </div>
  <button class="m-1 btn btn-light" id="clearButton">Clear Messages</button>
  </div>`;
  utils.printToDom('#navbar', domString);
  document.querySelector('#navbar').addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      addMessage.addMessage();
      messageCards.messageBuilder();
      $('#messageText').val('');
    }
  });
  $('body').on('change', '#emojis', addMyEmojie);
  $('body').on('click', '#clearButton', data.empty);
  $('body').on('click', '#clearButton', messageCards.messageBuilder);
};

export default { printNav };
