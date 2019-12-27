var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  // `name` must be unique and of type String
  name: {
    type: String,
    unique: true
  },
  bikeridedistance: {
    type: Number,
    required: true
  },
  recyclematerial: {
    type: Number,
    required: true
  },
  waterconserved: {
    type: Number,
    required: true
  },
  paperrecycled: {
    type: Number,
    required: true
  },
  userCreated: {
    type: Date,
    default: Date.now
  }
  // `notes` is an array that stores ObjectIds
  // The ref property links these ObjectIds to the Note model
  // This allows us to populate the User with any associated Notes
  //   notes: [
  //     {
  //       // Store ObjectIds in the array
  //       type: Schema.Types.ObjectId,
  //       // The ObjectIds will refer to the ids in the Note model
  //       ref: "Note"
  //     }
  //   ]
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;
