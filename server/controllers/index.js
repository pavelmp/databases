var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err,results){
        if(err){
          console.log('Messed up the select of Message: ',err);
        } else {
          res.json(results);
        }
      });
    }, // a function which handles a get request for all messages

    post: function (req, res){
      models.messages.post(req.body, function(err,results){
        if(err){
          console.log('Messed up the insert of message: ',err);
        } else {
          res.json(results);
        }  
      }); 
    // a function which handles posting a message to the database
    }
  },  

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err,results){
        if(err){
          console.log('Messed up the select in USERS: ',err);
        } else {
          res.json(results);
        }
      });
    },

    post: function (req, res) {
      models.users.post(req.body, function(err,results){
        if(err){
          console.log('Messed up the USER insert:', err);
        } else {
          res.json(results); 
        }  
      });
    }
  }
};

