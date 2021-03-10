const fastifyPlugin = require("fastify-plugin");

async function dbConnector(fastify, options) {
  fastify.register(import("fastify-mongodb"), {
    url: "mongodb://xxxxxxxxx:27017/test_database",
  });
}

module.exports = fastifyPlugin(dbConnector);
