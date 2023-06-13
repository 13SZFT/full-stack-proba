const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    nev: {
      type: String,
    },
    jelszo: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
