const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect("YOUR_MONGOBD_LINK", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("db connceted");
  })
  .catch((error) => {
    console.log("error", error);
  });

app.use(express.json());
require("./routes/routes")(app);
app.listen(3000, () => {
  console.log("sever started");
});
