const routes = require("express").Router();
const voice = require("./voice");
const createError = require("http-errors");

routes.use("/voice", voice);

routes.use(async (req, res, next) => {
  next(createError.NotFound("Route not Found"));
});

routes.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    status: false,
    message: err.message,
  });
});

module.exports = routes;
