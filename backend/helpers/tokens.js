const jwt = require("jsonwebtoken");

exports.generateToken = (payload, expired) => {

  try {
    const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
      expiresIn: expired,
    });
    return token
  } catch (error) {
     console.error('Error generating token:', error);
     return null
  }

};
