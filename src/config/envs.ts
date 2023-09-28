import "dotenv/config";
import env from "env-var";

export const envs = {
  PORT: env.get("PORT").required().asPortNumber(),
  MONGODB_URI: env.get("MONGODB_URI").required().asString(),
  AWS_ACCESS_KEY_ID: env.get("AWS_ACCESS_KEY_ID").required().asString(),
  AWS_SECRET_ACCESS_KEY: env.get("AWS_SECRET_ACCESS_KEY").required().asString(),
  AWS_BUCKET_NAME: env.get("AWS_BUCKET_NAME").required().asString(),
  AWS_REGION: env.get("AWS_REGION").required().asString(),
};
