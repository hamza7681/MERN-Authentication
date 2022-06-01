const User = require("../models/userSchema");

const authAdmin = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.user.id });
    if (user.role !== 1) {
      return res.status(400).json({ msg: "Admin resources access denied!" });
    }
    next();
  } catch (e) {
    return res.status(500).json({ msg: e.message });
  }
};

module.exports = authAdmin;
