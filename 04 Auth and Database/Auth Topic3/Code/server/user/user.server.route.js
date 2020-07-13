const User = require('./user.server.controller')


module.exports = function (app, passport) {
  /**Declare all routes file */
	app.post('/login',
	passport.authenticate('local', {
	}), User.login);
	app.post('/create', User.create);
	app.get('/logout', User.logout);
};
