import { uploadFileToS3 } from "../services/s3.service";
export async function processImageUpload(base64Data: string, fileName: string) {
  try {
    const base64Image = base64Data.replace(/^data:image\/(png|jpeg|jpg);base64,/, "");
    const imageBuffer = Buffer.from(base64Image, "base64");
    return await uploadFileToS3(imageBuffer, fileName);
  } catch (error) {
    console.error("Error en processImageUpload:", error);
    throw new Error("Error processImageUpload");
  }
}

export async function processFileUpload(base64Data: string, fileName: string) {
  try {
    const base64File = base64Data.replace(/^data:application\/pdf;base64,/, "");
    const fileBuffer = Buffer.from(base64File, "base64");
    return await uploadFileToS3(fileBuffer, fileName);
  } catch (error) {
    console.error("Error en processImageUpload:", error);
    throw new Error("Error processImageUpload");
  }
}
