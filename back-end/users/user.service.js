const NodeJSONdb = require('node-json-db');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const config = require('../config');

const db = new NodeJSONdb('users', true, false, '/');

async function register(req, res) {
  bcrypt.hash(req.body.password, 10, function(err, hash) {
    try {
      console.log(hash);
      const newUser = {
        "id": req.body.id,
        "username": req.body.username,
        "firstName": req.body.firstName,
        "sureName": req.body.sureName,
        "mail": req.body.mail,
        "city": req.body.city,
        "password": hash
      };
      db.push(`/users[${req.body.id}]`, newUser, true);
      res.json(newUser);
    }
    catch (e) {
      console.error('NodeJSONdb error: '+e)
    }
    if(err) console.error('bcrypt error: '+err)
  })
}

async function signin({ username, password }) {
  const users = await db.getData('/').users;
  const user = await users.find(u => {
    return u.username === username
  });
  const token = (user && bcrypt.compareSync(password, user.password)) ? jwt.sign({sub: user.id}, config.secret) : 'username or password is incorrect';
  return {
    ...user,
    token
  };
}

module.exports = {
  register,
  signin
};

