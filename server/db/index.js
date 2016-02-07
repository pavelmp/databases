var Sequelize = require('sequelize');
module.exports.db = new Sequelize('chat', 'root', '');
/* TODO this constructor takes the database name, username, then password.
 * Modify the arguments if you need to */

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
// exports.Users.drop();
// exports.Messages.drop()
module.exports.db.Users = module.exports.db.define('Users', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
},{
    timestamps: false
});

module.exports.db.Messages = module.exports.db.define('Messages', {
  username: Sequelize.STRING,
  message: Sequelize.STRING,
  roomname: Sequelize.STRING,
  // createdAt: Sequelize.DATE,
  // updatedAt: Sequelize.DATE 
},{
    timestamps: false
});

/* .sync() makes Sequelize create the database table for us if it doesn't
 *  exist already: */
 //console.log('Module: ',module.exports.Users);
module.exports.db.Users.sync();//.success(function() {
  //console.log('Created USERS table');
  /* This callback function is called once sync succeeds. */

  // // now instantiate an object and save it:
  // var newUser = Users.build({username: 'Jean Valjean'});
  // newUser.save().success(function() {

  //   /* This callback function is called once saving succeeds. */

  //   // Retrieve objects from the database:
  //   Users.findAll({ where: {username: 'Jean Valjean'} }).success(function(users) {
  //     // This function is called back with an array of matches.
  //     for (var i = 0; i < users.length; i++) {
  //       console.log(users[i].username + ' exists');
  //     }
  //   });
  // });
//});

module.exports.db.Messages.sync();//.success(function() {
  //console.log('Created MESSAGES table');
  /* This callback function is called once sync succeeds. */

  // now instantiate an object and save it:
  // var newMessage = Messages.build({username: 'Jean Valjean'});
  // newMessage.save().success(function() {

  //   /* This callback function is called once saving succeeds. */

  //   // Retrieve objects from the database:
  //   Messages.findAll({ where: {username: 'Jean Valjean'} }).success(function(users) {
  //     // This function is called back with an array of matches.
  //     for (var i = 0; i < users.length; i++) {
  //       console.log(users[i].username + ' exists');
  //     }
  //   });
  // });
//});


// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
// var mysql = require('mysql');
// exports.dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'chat'
//     });

// exports.dbConnection.connect();

//exports.dbConnection.query();
