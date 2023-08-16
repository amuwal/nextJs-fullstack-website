import { connectDb } from "@/db/dbConnect";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
connectDb();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const updatedUser = reqBody;
    console.log("body", reqBody)

    const savedUser = await User.updateOne(
      { _id: updatedUser._id },
      updatedUser
    );

    const user = await User.findOne({ _id: updatedUser._id });

    console.log("saved user", user);
    return NextResponse.json({
      message: "user updated sucessfully",
      user: user,
    });
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
