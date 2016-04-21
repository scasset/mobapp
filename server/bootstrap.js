Meteor.startup(function () {
//LDAP_DEFAULTS.url = "ldap://ldap2012.scasset.com";
// // LDAP_DEFAULTS.base = "DC=scasset,DC=com";


 LDAP_DEFAULTS.url = "ldap://batman2008.scasset.com";
 LDAP_DEFAULTS.port = "389";
 LDAP_DEFAULTS.createNewUser = true;
 
 //LDAP_DEFAULTS.defaultDomain = "scasset.com";
//DC=scasset,DC=com	

  if (Chats.find().count() !== 0) return;
 
  Messages.remove({});
   
  let messages = [
    {
      text: 'You on your way?',
      timestamp: moment().subtract(1, 'hours').toDate()
    },
    {
      text: 'Hey, it\'s me',
      timestamp: moment().subtract(2, 'hours').toDate()
    },
    {
      text: 'I should buy a boat',
      timestamp: moment().subtract(1, 'days').toDate()
    },
    {
      text: 'Look at my mukluks!',
      timestamp: moment().subtract(4, 'days').toDate()
    },
    {
      text: 'This is wicked good ice cream.',
      timestamp: moment().subtract(2, 'weeks').toDate()
    }
  ];
 
  messages.forEach((m) => {
    Messages.insert(m);
  });
 
  let chats = [
    {
      name: 'Ethan Gonzalez',
      picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg'
    },
    {
      name: 'Bryan Wallace',
      picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg'
    },
    {
      name: 'Avery Stewart',
      picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg'
    },
    {
      name: 'Katie Peterson',
      picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg'
    },
    {
      name: 'Ray Edwards',
      picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg'
    }
  ];
 
  chats.forEach((chat) => {
    let message = Messages.findOne({chatId: {$exists: false}});
    chat.lastMessage = message;
    let chatId = Chats.insert(chat);
    Messages.update(message._id, {$set: {chatId: chatId}})
  });
});