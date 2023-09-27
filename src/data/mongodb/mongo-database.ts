import mongoose from "mongoose";

interface Options {
  MONGODB_URI: string;
}

export class MongoDatabase {
  static async connect(options: Options) {
    const { MONGODB_URI } = options;
    try {
      await mongoose.connect(MONGODB_URI);
      console.log("Mongo Connected");
      return true;
    } catch (error) {
      console.log("Mongo Connection error");
      throw error;
    }
  }
}
