require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3500;

// routes
app.get("/", (req, res) => {
  try {
    res.status(200).json({ msg: "Ez a válasz a kérésedre!" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
