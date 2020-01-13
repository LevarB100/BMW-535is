const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const authWare = require("./middleware/authware");
const ttrackRoutes = express.Router();
const PORT = process.env.PORT || 4000;
​
const path = require("path");
​
let ttrack = require("./models");
​
app.use(cors());
app.use(bodyParser.json());
​
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../client/build")));
}
​
mongoose.connect("mongodb://127.0.0.1:27017/ttracker", {
  useNewUrlParser: true
});
const connection = mongoose.connection;
​
connection.once("open", function() {
  console.log("Mongodb database connection established succesfully");
});
​
require("./routes/api-routes.js")(app);
​
ttrackRoutes.route("/").get(authWare, function(req, res) {
  console.log(req.user.toObject());
  ttrack.metric.find(
    {
      userId: req.user._id
    },
    function(err, ttracker) {
      if (err) {
        console.log(err);
      } else {
        res.json(ttracker);
      }
    }
  );
});
​
ttrackRoutes.route("/:id").get(authWare, function(req, res) {
  let id = req.params.id;
  track1.userId = req.user._id;
  ttrack.metric.findById(id, function(err, ttrack1) {
    res.json(ttrack1);
  });
});
​
ttrackRoutes.route("/add").post(authWare, function(req, res) {
  let ttrack1 = req.body;
  console.log(ttrack1);
  ttrack1.userId = req.user._id;
  ttrack.metric
    .create(ttrack1)
    .then(ttrack1 => {
      res.status(200).json({ ttrack1: "ttrack added successfully" });
    })
    .catch(err => {
      res.status(400).send("adding new ttrack failed");
    });
});
​
ttrackRoutes.route("/update/:id").post(function(req, res) {
  ttrack.metric.findByIdAndUpdate(req.params.id, { $inc: req.body }, function(
    err,
    ttrack1
  ) {
    if (!ttrack1) return res.status(404).send("data not found");
    res.json("TTrack updated");
  });
});
​
app.use("/ttracker", ttrackRoutes);
​
if (process.env.NODE_ENV === "production") {
	app.get("*", function(req, res) {
        res.json(path.join(__dirname, "../client/build/index.html"));
	});
}
​
app.listen(PORT, function() {
  console.log("server is running brah on PORT" + PORT);
});
