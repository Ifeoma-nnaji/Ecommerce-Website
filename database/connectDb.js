const connPool = require('../config/dbConnect');
const connectSequelize = require('./connectSequelize');

const connectDB = async () => {
  try {
    const connection = await connPool.getConnection();
    connectSequelize();
    console.log("Database connected successfully");
    connection.release();       //Returns the connection back to the pool
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
};

module.exports = connectDB;