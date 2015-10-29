/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Poll = require('../api/poll/poll.model');


User.find({}).remove(function() {
  User.create( {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Poll.find({}).remove(function() {
  Poll.create({
    question: 'Why is the sky blue?',
    answers: [{
      option: 'Einstein',
      votes: 12,
    }, {
      option: 'Orange',
      votes: 127,
    }],
  }, {
    question: 'Are you okay?',
    answers: [{
      option: 'Yes',
      votes: 2,
    },{
      option: 'No',
      votes: 1,
    }, {
      option: 'Maybe',
      votes: 13,
    }, {
      option: 'I don\'t know',
      votes: '12'
    }]
  }, function() {
        console.log("Removed all the polls!") 
  });
});