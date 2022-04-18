import mongoose from "mongoose";

const userOTPVerificationSchema = mongoose.Schema({
  
  id: { type: String },
  otp: { type: String },
  createdAt:Date,
  expiresAt:Date,
});

const UserOTPVerification=mongoose.model(
     "UserOTPVerification",
     userOTPVerificationSchema
)

module.exports= UserOTPVerification;