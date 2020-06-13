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
    document.getElementById('theme').style.fontSize = '60px';
  } else {
    document.getElementById('theme').style.fontSize = '40px';
  }
};

$('body').on('click', '#largeText', updateText);

export default { buildOptions };
