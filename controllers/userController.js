const User = require("../models/user");

const getUsers = async (req, res) => {
  try {

    const users = await User.findAll();

    res.status(200).json(users);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const getUser = async (req, res) => {
  try {

    const user = await User.findByPk(
      req.params.id
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json(user);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const updateRole = async (req, res) => {
  try {

    const user = await User.findByPk(
      req.params.id
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    user.role = req.body.role;

    await user.save();

    res.status(200).json({
      success: true,
      user
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  getUsers,
  getUser,
  updateRole
};