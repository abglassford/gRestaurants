function sum(num1, num2, callback) {
  const total = num1 + num2;
  if (isNaN(total)) {
    const error = 'Something went wrong!';
    callback(error);
  } else {
    callback(null, total);
  }
}

function isAuthenticated(req, res, next) {
  if (req.session.user === undefined) {
    req.session.user = 'notloggedin';
    req.session.user.admin = null;
    req.session.user.name = null;
    req.session.user.dataId = null;
  }
  else {
    req.renderObject.admin = req.session.user.admin;
    req.renderObject.user_name = req.session.user.name;
    req.renderObject.user_id = req.session.user.dataId;
  }
  return next();
}

module.exports = {
  sum,
  isAuthenticated
};
