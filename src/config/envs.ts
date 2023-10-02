import "dotenv/config";
import env from "env-var";

export const envs = {
  PORT: env.get("PORT").required().asPortNumber(),
  MONGODB_URI: env.get("MONGODB_URI").required().asString(),
  AWS_ACCESS_KEY_ID: env.get("AWS_ACCESS_KEY_ID").required().asString(),
  AWS_SECRET_ACCESS_KEY: env.get("AWS_SECRET_ACCESS_KEY").required().asString(),
  AWS_BUCKET_NAME: env.get("AWS_BUCKET_NAME").required().asString(),
  AWS_REGION: env.get("AWS_REGION").required().asString(),
  BOT_REGISTRATION_SNS_URL: env.get("BOT_REGISTRATION_SNS_URL").required().asString(),
  BOT_SECRET_KEY: env.get("BOT_SECRET_KEY").required().asString(),
  BOT_ACCESS_KEY: env.get("BOT_ACCESS_KEY").required().asString(),
  BOT_REGION: env.get("BOT_REGION").required().asString(),
  CHANNEL: env.get("CHANNEL").required().asString(),
  CHANNEL_ID: env.get("CHANNEL_ID").required().asString(),
};
