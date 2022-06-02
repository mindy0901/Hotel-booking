import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import hotelsRoute from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';

const app = express();
dotenv.config();

const mongoDB = async () => {
      try {
            await mongoose.connect(process.env.MONGO_URL);
            mongoose.set('debug', true)
            console.log('Connected to MongoDB')
      } catch (error) {
            throw error;
      }
}

app.use(cors());
app.use(cookieParser())
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
      const errorStatus = err.status || 500;
      const errorMessage = err.message || "Something went wrong!";
      return res.status(errorStatus).json({
            success: false,
            status: errorStatus,
            message: errorMessage,
            stack: err.stack,
      });
});

app.listen(process.env.PORT || 5000, () => {
      mongoDB();
      console.log(`Backend server is running on port: ${process.env.PORT}`);
});