const fastifyPlugin = require("fastify-plugin");

async function dbWith(fastify, opts) {
  console.log(fastify.mongo);

  fastify.get("/db", async (req, reply) => {
    req.log.info("/ db");
    reply.type("application/json").code(404);

    return { hello: "world from plugin" };
  });
} // plugin
//export default plugin;
module.exports = fastifyPlugin(dbWith);
