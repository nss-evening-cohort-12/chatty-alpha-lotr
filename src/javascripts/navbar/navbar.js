import utils from '../helpers/utils';
import logo from '../assets/onering.png';
import './navbar.scss';

const printNav = () => {
  const domString = `<div class="row d-flex"><a class="navbar-brand offset-2" href="#"><img id="logo" class="center-block" src="${logo}" width="50px" height="50px" alt="one ring logo"></a>
  <div class="input-group col-6">
  <input id="messageText" class="form-control m-1" aria-label="With textarea" placeholder="Hit Enter to Send"></input>
  </div>
  <button class="m-1 btn btn-light col-1" id="clearButton">Clear Messages</button> 
  </div>`;
  utils.printToDom('#navbar', domString);
};

export default { printNav };
