var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryString = 'SELECT * FROM Messages;';
      db.dbConnection.query(queryString, function(err, results) {
        callback(err,results); // all mesages from server
      });
    }, // a function which produces all the messages
    
    post: function (message,callback) {
      var queryString = 'INSERT INTO Messages (username, message, roomname) VALUES(' + ['"' + message.username + '"','"' + message.message + '"','"' + message.roomname + '"'].join(',') + ');';
      db.dbConnection.query(queryString, function(err, resp) {
         if(err){
          console.log('Messed up');
         } else {
           var queryString = 'SELECT * FROM Messages;';
           db.dbConnection.query(queryString, function(err, results) {
             callback(err,results); // all mesages from server
           });
         } 
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryString = 'SELECT * FROM Users;';
      db.dbConnection.query(queryString, function(err, results) {
        callback(err,results); // all mesages from server
      });
    },
    post: function (user,callback) {
      user.password = 'NULL';
      var queryString = 'INSERT INTO Users (username, password) VALUES(' + '"' + user.username + '", "' + user.password + '");';
      db.dbConnection.query(queryString, function(err, results) {
        callback(err, results); // all mesages from server
      });
    }
  }
};

