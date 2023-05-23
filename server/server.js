require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Teacher = require("./models/teacher");
const { diakok, tanarok } = require("./adatok");

const PORT = process.env.PORT || 3500;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.get("/", (req, res) => {
  try {
    res.status(200).json({ msg: "Ez a válasz a kérésedre! Dejó!" });
  } catch (error) {
    res.status(500).json({ msg: "Valami hiba történt!" });
  }
});

app.get("/diakok", (req, res) => {
  try {
    res.status(200).json({ msg: diakok });
  } catch (error) {
    res.status(500).json({ msg: "Valami hiba történt!" });
  }
});

app.get("/tanarok", async (req, res) => {
  try {
    const tanarok = await Teacher.find({});
    res.status(200).json({ msg: tanarok });
  } catch (error) {
    res.status(500).json({ msg: "Valami hiba történt!" });
  }
});

app.post("/tanarok", async (req, res) => {
  try {
    const { nev, kor, szemszin, telefonszam, email, kep } = req.body;
    console.log(req.body);
    const ujTanar = new Teacher({
      nev,
      kor,
      szemszin,
      telefonszam,
      email,
      kep,
    });
    console.log(ujTanar);
    await ujTanar.save();
    res.status(201).json({ msg: "Sikeres tanár létrehozás!" });
  } catch (error) {
    res.status(500).json({ msg: "Valami hiba történt!" });
  }
});

// Adatbázis csatlakozás
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Sikeres adatbázis csatlakozás!"))
  .catch((error) => console.log(error.message));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
