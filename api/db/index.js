import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB = async () => {
  try {
    const connectionsInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`\n MongoDB connected !! DB HOST : ${connectionsInstance.connection.host}`);
  } catch (error) {
    console.log("MONGODB not connected**",error);
    process.exit(1)
  }
}
export default connectDB