class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createNewError = (message, status) => {
  return CustomError(message, statusCode);
}

module.exports = {
  CustomError,
  createNewError
};