const mongoose = require("mongoose");

const mongooseConnectionString = process.env.MONGO_DB_CONNECTION_STRING || "";
function connectDB() {
  mongoose
    .connect(mongooseConnectionString)
    .then(() => console.log(`Mongo DB connected`))
    .catch((err) => console.log(err));
}
module.exports = connectDB;
