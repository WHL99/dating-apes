const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userBasicInfoSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true, select: false },
  passwordHash: String,
});

const userProfileSchema = new Schema({
  name: String,
  birthday: Date,
  gender: String,
  animal: String,
  height: Number,
  weight: Number,
  area: String,
  lang: String,
  aboutMe: String,
  url: String,
  messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
});

const userSchema = new Schema(
  {
    ...userBasicInfoSchema.obj,
    ...userProfileSchema.obj,
  },
  {
    timestamps: true,
  }
);

const User = model('User', userSchema);
module.exports = User;
