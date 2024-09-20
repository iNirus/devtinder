const adminAuth = (req, res, next) => {
  const token = "ABCtoken";
  const isAdminAutorized = token === "ABCtoken";
  if (!isAdminAutorized) {
    res.status(401).send("Unathorized request");
  } else {
    next();
  }
};

module.exports = { adminAuth };
