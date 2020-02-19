const express = require("express");
const app = express();

const PORT = process.env.PORT || 9000;

// Request Body Middleware
app.use(express.json({ extended: true }));

// Routes
app.use("/api/test", require("./routes/home"));

app.listen(PORT, err => {
  if (err) console.error(err.message);
  console.log(`Server running on port ${PORT}... Press Ctrl + C to terminate.`);
});
