import utils from '../helpers/utils';
import logo from '../assets/onering.png';

const printNav = () => {
  const domString = `<img id="logo" src="${logo} alt="one ring logo"><input type="text" class="text-input" id="messageTextBox"><button class="btn" id="clearButton">Clear Messages</button> `;
  utils.printToDom('#navbar', domString);
};

export default { printNav };
