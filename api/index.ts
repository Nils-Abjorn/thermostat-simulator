import fastify from "fastify";
import { Thermostat } from "./thermostat";

const server = fastify();
let thermostat = new Thermostat();

server.get("/ping", async (request, reply) => {
  return "pong\n";
});

server.listen(3080, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
