const express = require("express");
const mongoose = require("mongoose");

// Routes
const user = require("./routes/api/user");
const profile = require("./routes/api/profile");
const post = require("./routes/api/post");

const app = express();

//Db config
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db)
  .then(() => console.log("Mongo db connected"))
  .catch(err => console.log(error));

app.get("/", (req, res) => {
  res.send("Hello martin");
});

app.use("/api/users", user);
app.use("/api/posts", post);
app.use("/api/profile", profile);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
