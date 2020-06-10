import utils from '../helpers/utils';
import userData from '../helpers/data/userData';
import data from '../helpers/data/messageData';

const messageBuilder = () => {
  let domString = '';
  const arr = data.getMessages();
  const users = userData.getUsers();

  for (let i = 0; i < arr.length; i += 1) {
    let user = '';

    for (let j = 0; j < users.length; j += 1) {
      if (arr[i].userID === users[j].id) {
        user = users[j].name;
      }
    }

    domString += `
      <div class='messageCard'>
        <div class='row'>
          <p>${user}</p>
          <p>${arr[i].timestamp}</p>
        </div>
        <p>${arr[i].message}</p>      
        <footer><div id='${user}${arr[i].id}'></div></footer>
      </div>
    `;
  }

  utils.printToDom('#messages', domString);
};

export default { messageBuilder };
