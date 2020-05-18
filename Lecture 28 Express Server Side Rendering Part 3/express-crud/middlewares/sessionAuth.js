function sessionAuth(req, res, next) {
  //set variable for every pug file
  res.locals.user = req.session.user;
  next();
}

module.exports = sessionAuth;
