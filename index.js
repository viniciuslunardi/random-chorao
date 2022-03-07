const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");

const quotes = require("./quotes.json");

const port = process.env.PORT || 5050;

const app = express();

const server = app.listen(parseInt(port), () => {
  console.log(`server listening on... ${port}`);
});

const corsMiddeware = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Origin", "GET");

  next();
};

router.get("/api/quote", (req, res) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  const json = JSON.stringify({ quote: quote });

  return res.status(200).send(json);
});

app.use("", router);
app.use(corsMiddeware);
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/frontend'));
