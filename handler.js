"use strict";
const Note = require("./model");

module.exports.create = async (event) => {
  try {
    const data = JSON.parse(event.body);
    const note = new Note(data);
    const savedNote = await note.save();

    return {
      statusCode: 200,
      body: JSON.stringify(savedNote),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An error occurred" }),
    };
  }
};

module.exports.get = async (event) => {
  try {
    const notes = await Note.find();

    return {
      statusCode: 200,
      body: JSON.stringify(notes),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An error occurred" }),
    };
  }
};

module.exports.update = async (event) => {
  try {
    const { _id, title, description } = JSON.parse(event.body);
    const note = Note.findByIdAndUpdate(_id, {title, description});
    const updatedNote = await note.save(note);

    return {
      statusCode: 200,
      body: JSON.stringify(updatedNote),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An error occurred" }),
    };
  }
};

module.exports.delete = async (event) => {
  try {
    const { _id} = JSON.parse(event.body);
    const note = Note.findByIdAndDelete(_id);

    return {
      statusCode: 200,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An error occurred" }),
    };
  }
};