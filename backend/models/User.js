const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// define the User model schema
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: "Username is Required"
  },

  password: {
    type: String,
    required: "Password is Required"
  },
  metrics: [
    {
      type: Schema.Types.ObjectId,
      ref: "metrics"
    }
  ]
});

UserSchema.methods.comparePassword = function(inputPass) {
  return bcrypt.compareSync(inputPass, this.password);
};

UserSchema.pre("save", function() {
  this.password = bcrypt.hashSync(this.password, 5);
});
//model for user
const User = mongoose.model("User", UserSchema);

module.exports = User;
