import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import { generateToken } from "../utils/authorization.js";

const { Schema, model } = mongoose;
const { hash, compare } = bcryptjs;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    avatar: {
      type: String,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isAlumni: {
      type: Boolean,
      default: false,
    },
    alumni: {
      type: Schema.Types.ObjectId,
      ref: "Alumni",
    },
    department: {
      type: String,
      required: true,
    },
    course: {
      type: String,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: String,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
      required: true,
      index: true,
    },

    dateOfBirth: {
      type: Date,
    },

    description: { type: String, trim: true },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await hash(this.password, 10);
});

userSchema.methods.generateVerificationToken = function () {
  const user = this;
  const verificationToken = generateToken(user._id);
  return verificationToken;
};

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await compare(enteredPassword, this.password);
};
//create index for user schema
userSchema.index(
  { name: "text", email: "text", phoneNumber: "text", registerNumber: "text" },
  { name: "usersTextIndex" }
);

const User = model("User", userSchema);

export default User;
