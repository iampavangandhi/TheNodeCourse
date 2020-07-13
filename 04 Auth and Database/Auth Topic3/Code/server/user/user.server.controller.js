
/**
 * Module dependencies.
 */

const mongoose = require('mongoose')
const User = require('./user.server.model').User
const Boom = require('boom')


/**
 * Create user
 */

exports.create = function (req, res) {
  User.create(req.body, function (err, result) {
    if (err) {
      if(err.code === 11000){
        return res.json({data: "email already exist"});
      }
      return res.send(Boom.badImplementation(err));
    }
    return res.json(result);
  });
};



/**
 * Show login form
 */

exports.login = function (req, res) {
  if(req.user == "Unknown user"){
        return res.json({status:"Not Exist"});
    }
    else if(req.user == "Invalid password"){
        return res.json({status:"Invalid Username and Password"});
    }
    else{
      return res.json(req.user);
    }
};

/**
 * Logout
 */

exports.logout = function (req, res) {
  req.logout();
  return res.json(req.user);
};

/** authentication check. */
exports.authCallback = function (req, res) {
   return res.json(req.user);
};


