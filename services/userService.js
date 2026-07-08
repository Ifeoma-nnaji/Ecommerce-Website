const User = require("../models/user");

const changeUserRole = async (
  userId,
  role
) => {

  const user =
    await User.findByPk(
      userId
    );

  if (!user) {
    throw new Error(
      "User not found"
    );
  }

  user.role = role;

  await user.save();

  return user;
};

module.exports = {
  changeUserRole
};

