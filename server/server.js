import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import postRoutes from "./routes/index.js";
import mongoose from "mongoose";

import express from "express";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", postRoutes);

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@bartocrat.okqxfme.mongodb.net/users`
  )
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
