const fastifyPlugin = require("fastify-plugin");

async function dbxxx(fastify, opts) {
  // fastify.register(require("./dbconnector.js"));
  fastify.register(require("./dbconnector.js"));

  console.log("mongo", fastify.mongo);

  fastify.get("/db", async (req, reply) => {
    req.log.info("/ db");
    reply.type("application/json").code(404);

    return { hello: "world from plugin" };
  });
} // plugin

module.exports = fastifyPlugin(dbxxx);
