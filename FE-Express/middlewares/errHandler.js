function errHandler(error, req, res, next) {
  let statusCode = 500;
  let message = "Internal Server Error";
  console.log(error);
  switch (error.name) {
    case "AuthenticationFailed":
      statusCode = 401;
      message = "UNAUTHORIZED";
      break;
  }
  res.status(statusCode).json({ message });
}
module.exports = errHandler;
