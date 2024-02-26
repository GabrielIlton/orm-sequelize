const { TOKEN_SECRET, TOKEN_TIME_EXPIRE } = require('../../config/Environments');
const { sign, verify } = require('jsonwebtoken');

module.exports = {
  generate: ({ payload = {}, expiresIn = null }) => {
    if (!expiresIn) expiresIn = TOKEN_TIME_EXPIRE;

    return sign(payload, TOKEN_SECRET, { expiresIn });
  },

  verify: ({ tokenHash }) => verify(tokenHash, TOKEN_SECRET)
};
