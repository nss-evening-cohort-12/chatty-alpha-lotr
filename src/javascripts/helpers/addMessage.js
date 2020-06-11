import moment from 'moment';
import messageData from './data/messageData';

const getUser = () => {
  const radioElements = document.getElementsByName('options');
  let checkedID = '';
  radioElements.forEach((element) => {
    if (element.checked) {
      checkedID = element.id;
    }
  });
  return checkedID;
};

const addMessage = () => {
  const tempMessage = {
    userID: getUser(),
    timestamp: moment().format('LLL'),
    message: document.querySelector('#messageText').value,
    id: Date.now(),
  };
  messageData.addNewMessage(tempMessage);
};

export default { addMessage };
