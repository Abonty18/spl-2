import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModal from "../models/user.js";

const secret = 'test';

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    // const confirmPassword= await bcrypt.compare(confirmPassword, password);

    // if (!confirmPassword) return res.status(400).json({ message: "Invalid credentials" });
    


    
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
// const UserOTPVerification=require("./../models/UserOTPVerification");
const emailSend=async(req,res)=>{
  let data=await Users.findOne({email:req.body.email});
  const responseType={};
  if(data){
    let otpcode=Math.floor((Math.random()*10000)+1);
    let otpData=new otpcode({
      email:req.body.email,
      code:otpcode,
      expiresIn:new Date().getTime()+300*1000
    })
    let otpResponse=await otpData.save();
    responseType.statusText='success';
    responseType.message='Please check your Email id';
  }else{
    responseType.statusText='error';
    responseType.message="email id doesn't exist";
  }
  res.status(200).json(resType);
}
const changePassword=async (req,res)=>{
  let data=await Otp.find({email:req.body.email,code:req.body.otpcode})
const response={}
if(data){
  let data=await Otp.find({email:req.body.email,code:req.body.otpcode});
const response={}
if(data){
  let currentTime=new Date().getTime();
  let diff=data.expiresIn-currentTime;
  if(diff<0){
    response.message-'Token Expire'
    response.statusText='error'
  }
  else{
    let user=await Users.findOne({email:req.body.email})
    user.password=req.body.password;
    user.save();
    response.message="Password changed successfully"
    response.statusText='Success';
  }
}else{
  response.message='Invalid Otp'
  response.statusText="error";
}
res.status(200).json(response);


}


}
export const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });
  
    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};
