import mongoose from "mongoose";
import { DatabaseConnetionError } from "@alminadev/common";
import { app } from "./app";

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }

  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("connected to mongo db");
  } catch (err) {
    throw new DatabaseConnetionError();
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
};

start();
