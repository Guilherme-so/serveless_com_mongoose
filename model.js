const mongoose = require("./db");

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
