const mongoose = require("mongoose");

const useDatabase = async () => {
  const options = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    connectTimeoutMS: 3000,
  };

  mongoose.Promise = global.Promise;
  try {
    console.log("Trying to connect to database...");
    await mongoose.connect(process.env.CONNECTION_STRING, options);
    console.log("Connection with database successful!");
  } catch (err) {
    console.log("Unable to connect to database");
    throw new Error("Mongoose connect error: ", err.message);
  }
};

module.exports = useDatabase;
