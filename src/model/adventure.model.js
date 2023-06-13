const mongoose = require("mongoose");

const adventureSchema = new mongoose.Schema({
  adventure: Object,
});

module.exports = mongoose.model("adventure", adventureSchema);
