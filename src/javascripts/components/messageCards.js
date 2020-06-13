/* eslint-disable no-use-before-define */
import utils from '../helpers/utils';
import userData from '../helpers/data/userData';
import messageData from '../helpers/data/messageData';
import addMessage from '../helpers/addMessage';

const deleteMessage = (e) => {
  const messageNum = e.target.closest('.delete').dataset.messageId;
  messageData.removeMessage(messageData.findMessageIndex(messageNum));
  messageBuilder();
};

const printCans = () => {
  const currentUser = addMessage.getUser();
  const nodes = document.querySelectorAll('.delete');
  for (let i = 0; i < nodes.length; i += 1) {
    nodes[i].innerHTML = '';
    if (nodes[i].classList.contains(currentUser)) {
      nodes[i].innerHTML = '<button class="deleteButton"><i class="fas fa-trash-alt"></i></button>';
    }
  }
  const buttons = document.querySelectorAll('.deleteButton');
  buttons.forEach((button) => {
    button.addEventListener('click', deleteMessage);
  });
};

const messageBuilder = () => {
  let domString = '';
  const arr = messageData.getMessages();
  const users = userData.getUsers();
  let index = 0;
  if (arr.length >= 20) { index = arr.length - 20; }
  for (let i = index; i < arr.length; i += 1) {
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
            <div class='user'>${user}:</div>
            <div class='timestamp'>${arr[i].timestamp}</div>
        </div>
        <div class='messageBottom d-flex'>
            <div class='message'>"${arr[i].message}"</div> 
        </div>  
            <div data-message-id="${arr[i].id}" class='${currentID} delete'>testcan</div>
      </div>
      </div>

    `;
  }
  utils.printToDom('#messages', domString);
  printCans();
};


export default { messageBuilder, printCans };
