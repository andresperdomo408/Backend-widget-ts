import { envs } from "./config/envs";
import { Server } from "./presentation/server";
import { AppRoutes } from "./presentation/routes";
import { MongoDatabase } from "./data/mongodb";

(async () => {
  main();
})();

async function main() {
  await MongoDatabase.connect({
    MONGODB_URI: envs.MONGODB_URI,
  });

  const server = new Server();
  const routes = AppRoutes.routes;

  server.start({
    port: envs.PORT,
    routes: routes,
  });
}
