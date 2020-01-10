const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
let ttrack = new Schema({
  // `name` must be unique and of type String

  emission_con: {
    type: Number,
    required: true
  },
  plastic_con: {
    type: Number,
    required: true
  },
  water_con: {
    type: Number,
    required: true
  },
  paper_con: {
    type: Number,
    required: true
  },
  userCreated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("ttrack", ttrack);
