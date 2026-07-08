const sequelize = require("./sequelize");

require("../models");

const connectSequelize = async () => {
  try {

    await sequelize.authenticate();

    console.log(
      "Sequelize connected successfully"
    );

    await sequelize.sync();

    console.log(
      "All models synced successfully!"
    );

  } catch (error) {

    console.error(
      "Sequelize connection failed:",
      error.message
    );

  }
};

module.exports = connectSequelize;