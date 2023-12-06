import express from "express";
import cors from "cors";

const app = express()
app.use(cors());
app.use(express.json); //TO BE ABLE TO RECEIVE BODY OF POST

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

console.log("RUNS");