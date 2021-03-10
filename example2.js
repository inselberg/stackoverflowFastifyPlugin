#!/usr/bin/env node

// Require the framework and instantiate it
const fastify = require("fastify")({
  disableRequestLogging: true, // * https://www.fastify.io/docs/latest/Server/#disablerequestlogging
  logger: true,
});

//fastify.register(require("./plugins/dbconnector.js"));
//fastify.register(require("./plugins/db_with_connector.js"), { prefix: "/db" });
fastify.register(require("./plugins/db.js"), { prefix: "/plugin" });

fastify.get("/", async (request, reply) => {
  return { status: "... with plugins" };
});

process.on("uncaughtException", (err) => {
  console.log("UncaughtException processing: %s", err);
});
const start = async () => {
  try {
    await fastify.listen(3000, "0.0.0.0");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
