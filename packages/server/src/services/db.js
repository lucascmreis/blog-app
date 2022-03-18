const colors = require('colors/safe');
const mongoose = require('mongoose');

const connectDB = async uri => {
  try {
    const mongoURI = uri || "mongodb+srv://spacer:spacer1123581321@cluster0.gs61o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    console.log('mongoURI', mongoURI)
    const conn = await mongoose.connect(mongoURI, {
      autoIndex: false,
    });

    console.info(colors.cyan.underline.bold(`MongoDB Connected to host: ${conn.connection.host}`));
  } catch (err) {
    console.log('erro de conexao:', err);
  }
};

module.exports={connectDB}
