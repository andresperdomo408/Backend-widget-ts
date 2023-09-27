import "dotenv/config";
import env from "env-var";

export const envs = {
  PORT: env.get("PORT").required().asPortNumber(),
  MONGODB_URI: env.get("MONGODB_URI").required().asString(),
};
