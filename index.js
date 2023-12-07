const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};
const databaseRouter = require("./routes/database");
app.use(express.json());
app.use(cors(corsOptions));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.use("/database", databaseRouter);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});