import userData from '../helpers/data/userData';
import utils from '../helpers/utils';
import messageCards from './messageCards';

const buildMultiUsers = () => {
  const users = userData.getUsers();
  let domString = '';
  domString += '<div class="btn-group btn-group-toggle " data-toggle="buttons">';
  domString += '<label class="btn btn-secondary active">';
  domString += `<input type="radio" name="options" id="${users[0].id}" autocomplete="off" checked> ${users[0].name}`;
  domString += '</label>';
  for (let i = 1; i < users.length; i += 1) {
    domString += '<label class="btn btn-secondary">';
    domString += `<input type="radio" name="options" id="${users[i].id}" autocomplete="off"> ${users[i].name}`;
    domString += '</label>';
  }
  domString += '</div>';

  utils.printToDom('#users', domString);
  const options = document.getElementsByName('options');
  options.forEach((option) => option.addEventListener('click', messageCards.printCans));
};

export default { buildMultiUsers };
