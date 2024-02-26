module.exports = {
  // C
  CLASS_LIMIT: process.env.CLASS_LIMIT,
  // D
  DATABASE_URI: process.env.DATABASE_URI,
  // N
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  // P
  PORT: process.env.PORT ?? '3030',
  // S
  SOCKET_PORT: process.env.SOCKET_PORT ?? 5000,

  // T
  TOKEN_SECRET: process.env.TOKEN_SECRET,
  TOKEN_TIME_EXPIRE: process.env.TOKEN_TIME_EXPIRE
};
