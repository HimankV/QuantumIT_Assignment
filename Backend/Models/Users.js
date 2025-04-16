import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: false, // Make it false if email is not required during registration
    unique: true, // Ensure email uniqueness if you're using it
  },
  dob: {
    type: Date,
    required: false, // Make it false if date of birth is not required
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
