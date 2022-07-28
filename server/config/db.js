const mongoose = require('mongoose');
const { env} = process; // We can access it because of dotenv in server.js file

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(env.MONGO_URI);

    console.log(`Connected to Mongo database ${connection.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(`Error: ${error}`.bgRed.white.bold);
    process.exit(1);
  }

}

module.exports = connectDB