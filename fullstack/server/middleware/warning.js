const removeWarning = (req, res, next) => {
  res.setHeader(
    "Permissions-Policy",
    "accelerometer=(), autoplay=(), clipboard-write=(), encrypted-media=(), gyroscope=(), picture-in-picture=(), web-share=()"
  );
  next();
};

module.exports = removeWarning;