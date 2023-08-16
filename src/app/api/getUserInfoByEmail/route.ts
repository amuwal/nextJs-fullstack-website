import getUserFromToken from "@/helpers/getUserFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import { connectDb } from "@/db/dbConnect";

connectDb();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const email = reqBody.email;

    const user = await User.findOne({ email: email }).select(
      "-password"
    );
    return NextResponse.json({
      message: "suggestions found",
      user: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
