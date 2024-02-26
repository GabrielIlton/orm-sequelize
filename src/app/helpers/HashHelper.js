const bcryptjs = require('bcryptjs');

module.exports = {
  generate: async ({ text, salt = 5 }) => bcryptjs.hash(text, salt),

  generateSync: ({ text, salt = 5 }) => bcryptjs.hashSync(text, salt),

  compare: async ({ text, textHash }) => bcryptjs.compare(text, textHash)
};
