const messages = [{
  userID: 'user1',
  timestamp: 'Dec 18 T.A. 3018',
  message: 'If by my life or death I can protect you, I will. You have my sword…',
  id: 1,
},
{
  userID: 'user2',
  timestamp: 'Dec 18 T.A. 3018',
  message: 'and you have my bow',
  id: 2,
},
{
  userID: 'user3',
  timestamp: 'Dec 18 T.A. 3018',
  message: 'and my axe',
  id: 3,
},
{
  userID: 'user4',
  timestamp: 'Dec 18 T.A. 3018',
  message: 'What do you mean he doens\'t know about elevensies?',
  id: 4,
},
{
  userID: 'user5',
  timestamp: 'Dec 18 T.A. 3018',
  message: 'I will take the Ring, though I do not know the way.',
  id: 5,
},
];

const getMessages = () => messages;

const addNewMessage = (message) => {
  messages.push(message);
};

export default { getMessages, addNewMessage };
