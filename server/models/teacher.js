const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  nev: {
    type: String,
    required: true,
  },
  kor: {
    type: Number,
    required: true,
    min: 10,
  },
  szemszin: {
    type: String,
    required: true,
  },
  telefonszam: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  kep: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("teacher", teacherSchema);
