module.exports = function (app, passport) {
    /**Declare all routes file */
	require('../user/user.server.route')(app, passport);
};
