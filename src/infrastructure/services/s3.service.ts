import AWS from "aws-sdk";
import { envs } from "../../config/envs";
import { v4 as uuidv4 } from "uuid";
import * as mime from "mime-types";

AWS.config.update({
  accessKeyId: envs.AWS_ACCESS_KEY_ID,
  secretAccessKey: envs.AWS_SECRET_ACCESS_KEY,
  region: envs.AWS_REGION,
});

const s3 = new AWS.S3();

export const uploadFileToS3 = async (fileData: any, fileName: string) => {
  try {
    const uniqueFileName = `${uuidv4()}.${fileName.replace(/\s+/g, "_")}`;
    const contentType = mime.lookup(fileName) || "image/jpeg";
    return s3
      .upload({
        Bucket: envs.AWS_BUCKET_NAME,
        Key: uniqueFileName,
        Body: fileData,
        ContentType: contentType,
      })
      .promise();
  } catch (error) {
    throw new Error("Error uploading s3");
  }
};
