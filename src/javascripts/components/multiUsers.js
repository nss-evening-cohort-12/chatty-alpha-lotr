import userData from '../helpers/data/userData';
import utils from '../helpers/utils';

const buildMultiUsers = () => {
  const users = userData.getUsers();
  let domString = '';
  domString += '<div class="btn-group btn-group-toggle" data-toggle="buttons">';
  for (let i = 0; i < users.length; i = +1) {
    domString += `
      <label class="btn btn-secondary">
        <input type="radio" name="options" id="${users[i].id}" autocomplete="off"> ${users[i].name}
      </label>
    `;
  }
  domString += '</div>';
  utils.printToDom('#users', domString);
};

export default { buildMultiUsers };
