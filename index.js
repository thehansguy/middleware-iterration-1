const express = require("express");
const app = express();

app.use(express.json());

const checkForHaters = (req, res, next) => {
  if (req.body.name === "Hater") {
    res.json({
      error: "Yo, we don't allow Haters here mehn!!",
    });
  } else {
    next();
  }
};

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.post("/", checkForHaters, (req, res) => {
  res.send("You are logged in!");
});

app.listen(3000, () => {
  console.log("Yep!! The Server is running mehn!!");
});
