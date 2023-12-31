import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "Api",
    })
    .then((c) => console.log(`DB is connected to ${c.connection.host}`))
    .catch((e) => console.log(e));
};
