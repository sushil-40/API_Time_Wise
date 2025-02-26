// import mongoose from "mongoose";
// const mongoUrl = "mongodb://localhost:27017/online_time_wise";
// export const connectMongoDb = async () => {
//   try {
//     const conn = await mongoose.connect(mongoUrl);
//     conn && console.log("DB connected");
//   } catch (error) {
//     console.log(error);
//   }
// };

import mongoose from "mongoose";

// const mongoUrl = "mongodb://localhost:27017/online_time_wise";
const mongoUrl = process.env.MONGO_URL;

export const connectMongoDb = async () => {
  console.log(mongoUrl);
  try {
    const conn = await mongoose.connect(mongoUrl);
    conn && console.log("DB Connected Successfully");
  } catch (error) {
    console.log(error);
  }
};
