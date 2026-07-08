const User = require("../models/user");
const bcrypt = require("bcryptjs");

// Register User
const registerUser = async (userData) => {
  const existingUser = await User.findOne({
    where: {
      email: userData.email
    }
  });

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(
    userData.password,
    10
  );

  const user = await User.create({
    ...userData,
    password: hashedPassword
  });

  return user;
};

// Login User
const loginUser = async (
  email,
  password
) => {
  const user = await User.findOne({
    where: { email }
  });

  if (!user) {
    throw new Error(
      "Invalid credentials"
    );
  }

  const isMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!isMatch) {
    throw new Error(
      "Invalid credentials"
    );
  }

  return user;
};

module.exports = {
  registerUser,
  loginUser
};