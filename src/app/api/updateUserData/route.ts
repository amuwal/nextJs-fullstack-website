import { connectDb } from "@/db/dbConnect";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
connectDb();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const updatedUser = reqBody;
    console.log(updatedUser);

    const savedUser = await User.updateOne({_id: updatedUser._id}, updatedUser);

    const user = await User.findOne({_id: updatedUser._id})

    console.log(user, updatedUser)
    return NextResponse.json({
        message: "user updated sucessfully",
        user: user
    })

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
