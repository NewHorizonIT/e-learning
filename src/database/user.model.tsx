import mongoose from "mongoose";

export interface IUser {
  clerkId: string;
  userName: string;
  email: string;
  profileImageUrl?: string;
}

const userSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profileImageUrl: {
    type: String,
    required: false,
  },
});

export const UserModel = mongoose.model<IUser>("User", userSchema);
