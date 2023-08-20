import { connectDb } from "@/db/dbConnect";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connectDb();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;

    console.log(reqBody);

    // check if user exists
    const user = await User.findOne({ email });

    console.log(user);

    if (!user) {
      return NextResponse.json(
        { error: "User does not exists" },
        { status: 400 }
      );
    }

    const validPassword = await bcryptjs.compare(password, user.password);

    console.log(validPassword);

    if (!validPassword) {
      return NextResponse.json(
        { error: "Incorrect password" },
        { status: 400 }
      );
    }

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    // create Token to store in cookies
    const token = jwt.sign(tokenData, process.env.JWT_TOKEN_KEY!, {
        
    });

    const res = NextResponse.json({
      message: "login successfull",
      success: true,
    });

    res.cookies.set("token", token, { httpOnly: true });

    return res;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
