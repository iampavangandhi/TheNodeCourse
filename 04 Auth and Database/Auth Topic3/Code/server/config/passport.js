
/*!
 * Module dependencies.
 */

const User = require('../user/user.server.model').User;
const local = require('./passport/local');

/**
 * Expose
 */

module.exports = function (passport) {
  // serialize sessions
  passport.serializeUser(function(user, done) {
    done(null, user.id)
  })

  passport.deserializeUser(function(id, done) {
    User.findOne({ _id: id }, function (err, user) {
      done(err, user)
    })
  })

  // use these strategies
  passport.use(local);
};
