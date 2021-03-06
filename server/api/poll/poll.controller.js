'use strict';

var _ = require('lodash');

var Poll = require('./poll.model');

// Get list of polls
exports.index = function(req, res) {
  Poll.find(function (err, polls) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(polls);
    //return res.json(polls);
  });
};

// Get a single poll
exports.show = function(req, res) {
  Poll.findById(req.params.id, function (err, poll) {
    if(err) { return handleError(res, err); }
    if(!poll) { return res.status(404).send('Not Found'); }
    return res.json(poll);
  });
};

//Gets the polls made by a particular user.
  exports.showByUser  = function(req, res, next) {
    Poll.find({userID: req.params.id}, function(err, polls) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(polls);
    })
  }

// Creates a new poll in the DB.
exports.create = function(req, res) {
  Poll.create(req.body, function(err, poll) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(poll);
  });
};

// Updates an existing poll in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Poll.findById(req.params.id, function (err, poll) {
    if (err) { return handleError(res, err); }
    if(!poll) { return res.status(404).send('Not Found'); }
    var updated = _.extend(poll, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(poll);
    });
  });
};

// Deletes a poll from the DB.
exports.destroy = function(req, res) {
  Poll.findById(req.params.id, function (err, poll) {
    if(err) { return handleError(res, err); }
    if(!poll) { return res.status(404).send('Not Found'); }
    var ID = poll.userID;
    if (req.user._id == poll.userID) {
      poll.remove(function(err) {
        if(err) { return handleError(res, err); }
        Poll.find({userID: ID} , function(err, polls) {
          if (err) { return handleError(res, err); }
          res.status(200).json(polls);
        });
      });
    } else {
      return res.status(403).send('Forbidden');
    }
  });
};





function handleError(res, err) {
  return res.status(500).send(err);
}