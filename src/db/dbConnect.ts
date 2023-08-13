import mongoose from "mongoose";

export async function connectDb() {
  try {
    mongoose.connect(process.env.MONGODB_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Connected to MongoDb");
    });

    connection.on("error", (err) => {
      console.log(err);
    });
  } catch (error) {
    console.log(error);
    process.exit();
  }
}
