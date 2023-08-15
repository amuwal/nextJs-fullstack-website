import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please provide a username"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please provide a password"],
  },
  email: {
    type: String,
    unique: [true, "user already exists with this email"],
    required: [true, "please provide an email"],
  },
  photo: { data: Buffer, contentType: String },
  phone: { type: String },
  about: { type: String },
  skills: [{ type: String }],
  certifications: [{ type: Object }],
  experience: [
    {
      start: { type: Number, required: true },
      end: { type: Number, required: true },
      organization: { type: String, required: true },
      role: { type: String, required: true },
      jobTitle: { type: String, required: true },
    },
  ],
  education: [{
    start: { type: Number, required: true },
    end: { type: Number, required: true },
    institute: { type: String, required: true },
    course: { type: String, required: true },
    details: { type: String, required: true },
  },],
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
