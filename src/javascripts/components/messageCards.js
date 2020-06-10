import utils from '../helpers/utils';
import users from '../data/users';
import data from '../helpers/data/messageData';

const messageBuilder = () => {
  let domString = '';
  const arr = data.getMessages();

  for (let i = 0; i < 20; i += 1) {
    let user = '';

    for (let j = 0; j < users.length; j += 1) {
      if (arr[i].userID === users[j].id) {
        user = users[j].name;
      }
    }

    domString += `
      <div class='messageCard'>
        <div class='messageTop'>
          <h3>${user}</h3>
          <p>${arr[i].timestamp}</p>
        </div>
        <p>${arr[i].message}</p>      
        <footer><div id='${user}${arr[i].id}'></div></footer>
      </p>
    `;
  }

  utils.printToDom('#messages', domString);
};

export default { messageBuilder };
