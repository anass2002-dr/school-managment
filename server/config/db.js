const mongoose = require("mongoose");

function connectDB() {
//   const url = "mongodb+srv://anass2:dJrrlRJUFTbRk1wZ@school.nco3rdi.mongodb.net/";
  const url = "mongodb+srv://anassdermaj:4XVKfqLBM1hEQNdc@school.nco3rdi.mongodb.net/";

  try {
    mongoose.connect(url)
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

  const dbConnection = mongoose.connection;

  dbConnection.once("open", (_) => {
    console.log(`Database connected: with successe`);
  });

  dbConnection.on("error", (err) => {
    console.error(`Connection error: ${err}`);
  });
}

module.exports = connectDB;
