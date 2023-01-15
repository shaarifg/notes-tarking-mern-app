const serverConfig = {
  port: process.env.PORT || 3002,
  hostname: "localhost",
};

const dbConfig = {
  dbURL: process.env.DATABASE_URL,
};

module.exports = {
  serverConfig,
  dbConfig,
};
