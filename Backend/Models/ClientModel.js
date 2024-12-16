const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  email: { type: String},
  password: { type: String}
});

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;
