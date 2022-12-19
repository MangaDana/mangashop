import mongoose from "mongoose";

const User = mongoose.Schema({
  username: { type: String, required: true },

  email: { type: String, required: true },
  password: { type: String, required: true },

  balance: { type: Number, default: 0 },
  image: {
    type: String,
    default:
      "https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png",
  },
  admin: { type: Boolean, default: false },
});
export default  mongoose.models.User ||mongoose.model("User", User);;
