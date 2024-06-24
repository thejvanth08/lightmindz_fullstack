const { CustomError } = require("../errors/custom-error");

const errorHandler = (err, req, res, next) => {
  if(err instanceof CustomError) {
    res.status(err.statusCode).json({ error: err.message });
  } else {
    res.status(500).json({ error: "something went wrong" });
  }
}

module.exports = errorHandler;