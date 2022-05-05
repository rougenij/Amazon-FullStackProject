require("./src/db/mongoose");
const express = require("express");
const Router = require("./src/routes/Index.Routes");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", Router);

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "client/build");

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is up on port: ${PORT}`);
});
