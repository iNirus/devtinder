const mongoos = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://niranjan:nodeniranjan@niranjannode.82jev.mongodb.net/TinderDB"
  );
};

// connectDB()
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch(() => {
//     console.log("Error connecting to database");
//   });

module.exports = connectDB
