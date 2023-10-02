import AWS, { Credentials, SNS } from "aws-sdk";
import { envs } from "../../config/envs";
import { UserDataEntity } from "../../domain/entities/userData.entity";
import { ChatMessagesEntity, ConversationEntity } from "../../domain";

AWS.config.update({
  credentials: new Credentials({ accessKeyId: envs.BOT_ACCESS_KEY, secretAccessKey: envs.BOT_SECRET_KEY }),
  region: envs.BOT_REGION,
});

export const snsSendMessage = (chat: ChatMessagesEntity, message: ConversationEntity, user: UserDataEntity) => {
  return new SNS()
    .publish({
      Message: JSON.stringify({
        body: {
          data: {
            project: "61045f5214cfde001366e7bb",
            customerName: user.name,
            customerPicture: null,
            sessionKey: `${user.countryCode}${user.phoneNumber}`,
            channel: envs.CHANNEL,
            value: message.text,
            msgidentity: chat.conversation[chat.conversation.length - 1],
            interactionId: null,
          },
        },
        control: {
          operation: "INPUT",
        },
        context: {
          originChannelCode: "001",
          session: {
            clientId: "63d86f6fd6871f4998d28d87",
            project: "61045f5214cfde001366e7bb",
          },
        },
      }),
      TopicArn: envs.BOT_REGISTRATION_SNS_URL,
    })
    .promise();
};
