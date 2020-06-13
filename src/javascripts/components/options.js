import utils from '../helpers/utils';
import './options.scss';

const buildOptions = () => {
  let domString = '';
  domString += `
  <div class="container adj">
  <form>
    <div class="checkbox">
      <label><input id="darkTheme" type="checkbox" value="">Dark Theme</label>
      <label><input id="largeText" type="checkbox" value="tt" unchecked>Large Text</label>
    </div>
  </form>
</div>
  `;
  utils.printToDom('#checkboxes', domString);
};

const updateText = () => {
  const cb = document.getElementById('largeText');
  if (cb.checked === true) {
    document.getElementById('theme').style.fontSize = '55px';
    document.getElementById('messageText').style.fontSize = '55px';
  } else {
    document.getElementById('theme').style.fontSize = '35px';
    document.getElementById('messageText').style.fontSize = '35px';
  }
};

const updateTheme = () => {
  const cb = document.getElementById('darkTheme');
  if (cb.checked === true) {
    document.getElementById('messages').style.backgroundColor = '#333';
    document.getElementById('messageText').style.backgroundColor = 'black';
    document.getElementById('messageText').style.color = 'white';
    $('.messageCard').css('background-color', '#000000');
    $('.messageCard').css('color', 'white');
    $('.user').css('color', 'silver');
    $('.timestamp').css('color', 'silver');
    $('.theme1').css('background-color', '#333');
    document.getElementById('theme').style.backgroundColor = 'black';
  } else {
    document.getElementById('messageText').style.backgroundColor = 'white';
    document.getElementById('messageText').style.color = '#333';
    document.getElementById('messages').style.backgroundColor = '#214e34';
    document.getElementById('theme').style.backgroundColor = 'white';
    $('.messageCard').css('background-color', '#a7a7a9');
    $('.messageCard').css('color', 'white');
    $('.user').css('color', '#214e34');
    $('.timestamp').css('color', '#214e34');
    $('.theme1').css('background-color', '#482728');
  }
};

$('body').on('click', '#largeText', updateText);
$('body').on('click', '#darkTheme', updateTheme);

export default { buildOptions };
