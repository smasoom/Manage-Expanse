const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");

const connectDb = require("./config/connectDb");
// CONFIG .ENV FILE

dotenv.config();
connectDb();

// object
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// routes

app.get("/", (req, res) => {
  res.send("<h1>himasoom i m server</h1>");
});

// port

const PORT = 8080 || process.env.PORT;











// listen Server


app.listen(PORT, () => {
  console.log(`Server is runnig in port ${PORT}`);
});

