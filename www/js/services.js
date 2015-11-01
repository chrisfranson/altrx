angular.module('starter.services', [])

.factory('Messages', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var messages = [{
    id: 0,
    name: 'Dr. Who',
    lastText: 'Thanks, Dr. Who! I got 7500 so far and I am going to get to 10,000 every single day!',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
    history: [
      { mclass: 'from', message: 'David, it was nice to see you in the office yesterday! Don’t forget to get your 10,000 steps in! I’ll see you in a couple of months!' },
      { mclass: 'to', message: 'Thanks, Dr. Who! I got 7500 so far and I am going to get to 10,000 every single day!' },
      { mclass: 'from', message: 'Do I take my Metformin 2 pills 3 times a day?' },
      { mclass: 'to', message: 'This one is 2 pills twice a day - best to be 12 hours apart.  And if you ever have to go to the hospital - show them the bottle when you go.' }
    ]
  }, {
    id: 1,
    name: 'Coach Max',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460',
    history: [
      { mclass: 'from', message: 'Jill, I noticed that you haven’t updated your food log in about a week. Is everything alright?' },
      { mclass: 'to', message: 'Oops! I left my phone at my brother’s place. I will put that in right now. Thanks for reminding me.' }
    ]
  }];

  return {
    all: function() {
      return messages;
    },
    remove: function(message) {
      messages.splice(message.indexOf(message), 1);
    },
    get: function(messageId) {
      for (var i = 0; i < messages.length; i++) {
        if (messages[i].id === parseInt(messageId)) {
          return messages[i];
        }
      }
      return null;
    }
  };
});
