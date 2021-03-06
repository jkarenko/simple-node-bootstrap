"use strict";

const jwt = require("jwt-simple");

class TokenGenerator {
  constructor(secret) {
    this.secret = secret;
  }
  generateToken(user) {
    const date = new Date();
    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
      created: date,
      expires: date.setDate(date.getDate() + 14),
    };
    // console.log(payload);
    return jwt.encode(payload, this.secret);
  }
  decodeToken(token) {
    return jwt.decode(token, this.secret);
  }
}

module.exports = new TokenGenerator(process.env.TOKEN_SECRET);
module.exports.class = TokenGenerator;
