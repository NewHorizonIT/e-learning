import mongoose from "mongoose";

// declare cached
const cached = global.mongoose;

// Check cached exists
if (!cached) {
  global.mongoose = {
    conn: null,
    promise: null,
  };
}

// function connect Database

const dbConnect = async () => {
  if (cached?.conn) {
    console.log("Using cached MongoDB connection");
    return cached?.conn;
  }

  if (!cached?.promise) {
    cached.promise = mongoose.connect(process.env.MONGODB_URI!, {
      bufferCommands: false,
    });
  }

  try {
    cached.conn = await cached.promise;
    console.log("Connected to MongoDB Successfully");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
  return cached.conn;
};

export default dbConnect;
