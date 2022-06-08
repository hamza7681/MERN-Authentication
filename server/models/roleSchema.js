const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema(
  {
    role: {
      type: Number,
      required: true, // 0 = user, 1 = admin, 2 = moderator, 3 = manager
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Role", roleSchema);
