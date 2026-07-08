const {
  registerUser,
  loginUser
} = require("../services/authService");

const generateToken =
require("../utils/generateToken");

const register = async (req, res) => {
  try {
    const user = await registerUser(req.body);

    res.status(201).json({
      success: true,
      user
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } =
      req.body;

    const user = await loginUser(
      email,
      password
    );



const token = generateToken(user);

    res.status(200).json({
      success: true,
      token,
      user: {
        id: user.id,
        firstName:
          user.firstName,
        lastName:
          user.lastName,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  register,
  login,
  generateToken
};