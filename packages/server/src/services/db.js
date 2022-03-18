const colors = require('colors/safe');
const mongoose = require('mongoose');

const connectDB = async uri => {
  try {
    const mongoURI = uri || process.env.MONGO_URI
    const conn = await mongoose.connect(mongoURI, {
      autoIndex: false,
    });

    console.info(colors.cyan.underline.bold(`MongoDB Connected to host: ${conn.connection.host}`));
  } catch (err) {
    console.log('erro de conexao:', err);
  }
};

module.exports={connectDB}
