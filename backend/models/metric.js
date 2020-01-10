var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new MetricSchema object
// This is similar to a Sequelize model
var MetricSchema = new Schema({
  // `name` must be unique and of type String
  name: {
    type: String,
    unique: true
  },
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
  },
  userId: {
    type: Schema.Types.ObjectId
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
var Metric = mongoose.model("metrics", MetricSchema);

/*
findById = async (id) => {
  await Metric.findById(id, (err, ))
} 
*/

// Export the Metric model
module.exports = Metric;
