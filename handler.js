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
