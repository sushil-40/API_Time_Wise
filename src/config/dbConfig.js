import mongoose from "mongoose";
const mongoUrl = "mongodb://localhost:27017/online_time_wise";
export const connectMongoDb = async () => {
  try {
    const conn = await mongoose.connect(mongoUrl);
    conn && console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};
