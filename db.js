const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://guilhermemagno09:IhzBxWL34URc0FGD@cluster0.xafetu5.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to the database");
});

module.exports = mongoose;
