const mongoose = require('mongoose');
const db = require('./keys').mongoURI;

// const config = require('config');
// const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log("MongoDB Connected...")
  } catch(e) {
    console.log(e.message);

    process.exit(1);
  }
};

module.exports = connectDB;