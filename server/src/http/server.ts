import fastify from "fastify";

const app = fastify();

app
  .listen({
    port: 5173,
  })
  .then(() => {
    console.log("http server running");
  });
