require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const { diakok, tanarok } = require('./adatok');

const PORT = process.env.PORT || 3500;

// middlewares
app.use(cors());

// routes
app.get('/', (req, res) => {
  try {
    res.status(200).json({ msg: 'Ez a válasz a kérésedre! Dejó!' });
  } catch (error) {
    res.status(500).json({ msg: 'Valami hiba történt!' });
  }
});

app.get('/diakok', (req, res) => {
  try {
    res.status(200).json({ msg: diakok });
  } catch (error) {
    res.status(500).json({ msg: 'Valami hiba történt!' });
  }
});

app.get('/tanarok', (req, res) => {
  try {
    res.status(200).json({ msg: tanarok });
  } catch (error) {
    res.status(500).json({ msg: 'Valami hiba történt!' });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
