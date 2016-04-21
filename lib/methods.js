Meteor.methods({
  newMessage (message) {
	// let messageId=1;
	  console.log(message);
 
	     check(message, Match.OneOf(
      {
        text: String,
        type: String,
        chatId: String
      },
      {
        picture: String,
        type: String,
        chatId: String
      }
    ));
   message.timestamp = new Date();
 
    let messageId = Messages.insert(message);
    Chats.update(message.chatId, { $set: { lastMessage: message } });

    return messageId;
  }
});