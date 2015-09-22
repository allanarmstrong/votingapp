'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PollSchema = new Schema({
  question: String,
  answers: [{option: String, votes: {type: Number, default: 0}}],
  active: Boolean,
  userID: String
});

module.exports = mongoose.model('Poll', PollSchema);