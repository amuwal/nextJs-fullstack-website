import { connectDb } from "@/db/dbConnect";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connectDb();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const {username, email, password} = reqBody;

    console.log(username, email, password);

    // check if user already exists
    const user = await User.findOne({email});

    if (user) {
        return NextResponse.json({error: "User Already exists"}, {status: 400})
    } 
    
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt)

    const newUser = new User({
        username, 
        email,
        password: hashedPassword
    })

    const savedUser = await newUser.save();

    console.log(savedUser);

    return NextResponse.json({
        message: "user created sucessfully",
        user: savedUser
    })

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
