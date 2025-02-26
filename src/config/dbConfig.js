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
const mongoUrl =
  "mongodb+srv://grayson9999:sushil123@cluster-time-wise-db.cieql.mongodb.net/time_wise?retryWrites=true&w=majority&appName=Cluster-time-wise-db";
export const connectMongoDb = async () => {
  try {
    const conn = await mongoose.connect(mongoUrl);
    conn && console.log("DB Connected Successfully");
  } catch (error) {
    console.log(error);
  }
};
