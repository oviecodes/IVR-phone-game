const express = require("express");
const app = express();
const index = require("./routes/index");

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./connectors/mongodb.connector");

const PORT = process.env.PORT;

app.use("/", index);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
