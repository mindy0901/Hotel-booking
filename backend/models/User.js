import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
      {
            email: { type: String, required: true },
            username: { type: String, required: true, unique: true, },
            password: { type: String, required: true, },
            phoneNumber: { type: String, required: true, },
            img: { type: String, },
            city: { type: String },
            country: { type: String },
            isAdmin: { type: Boolean, default: false, },
      },
      {
            timestamps: true
      }
);

export default mongoose.model("User", UserSchema);