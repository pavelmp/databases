var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryString = 'SELECT * FROM Messages';
      db.dbConnection.query(queryString, function(err, results) {
        callback(results); // all mesages from server
      });
    }, // a function which produces all the messages
    
    post: function (message,callback) {
      // message = {
      //           username: 'Valjean',
      //           message: 'In mercy\'s name, three days is all I need.',
      //           roomname: 'Hello'
      //         };

      var queryString = 'INSERT INTO Messages VALUES(1,' + [message.username,message.message,message.roomname].join(',') + ');';
      db.dbConnection.query(queryString, function(err, results) {
        console.log(results, '<<<<<<<');
        callback(results); // all mesages from server
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

