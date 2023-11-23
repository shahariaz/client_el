const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const adminRoutes = require("./src/routes/admin");
const loginRoutes = require("./src/routes/login");
const ErrorHandler = require("./src/utils/ErrorHandler");
const testRoutes = require("./src/routes/test");
const corsOptions = require("./src//config/corsOptions");
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
// app.use("/", express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}
//serving Static files react build in production

if (process.env.NODE_ENV === "PRODUCTION") {
  const path = require("path");
  app.use(express.static(path.join(__dirname, "../Client/build")));
}
console.log(__dirname);
//user routes
app.use("/api/v1/admins", adminRoutes);
app.use("/api/v1", loginRoutes);
app.use("/api/v1", testRoutes);
app.all("*", (req, res, next) => {
  //   next(new AppError(`Can't find ${req.originalUrl} on this server!!!`, 404));
});
//Error handlers
app.use(ErrorHandler);
module.exports = app;
