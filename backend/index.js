const express = require("express");
const app = express();
const cors = require("cors");

const router = require("./router");

const corsConfig = {
  origin: 'http://localhost:4200',
  credentials: true,
  exposedHeaders: ['authorization']
}

app.use(cors(corsConfig));

app.use(express.json());
app.use(router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
