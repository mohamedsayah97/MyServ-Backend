import mongoose from "mongoose";

const config = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("Database connected...!");
    } catch (error) {
      console.log("error connecting database");
    }
  };
  export default config;