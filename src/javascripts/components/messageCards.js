import utils from '../helpers/utils';
import userData from '../helpers/data/userData';
import data from '../helpers/data/messageData';


const messageBuilder = () => {
  let domString = '';
  const arr = data.getMessages();
  const users = userData.getUsers();

  for (let i = 0; i < arr.length; i += 1) {
    let user = '';
    let currentID = '';
    for (let j = 0; j < users.length; j += 1) {
      if (arr[i].userID === users[j].id) {
        user = users[j].name;
        currentID = users[j].id;
      }
    }

    domString += `
      <div class='messageCard'>
        <div class='messageTop d-flex'>
            <div class='user'>${user}</div>
            <div class='timestamp'>${arr[i].timestamp}</div>
        </div>
        <div class='messageBottom d-flex'>
            <div class='message'>${arr[i].message}</div> 
        </div>  
            <div class='${currentID} delete'>testcan</div>
      </div>
      </div>

    `;
  }
  utils.printToDom('#messages', domString);
};

export default { messageBuilder };
