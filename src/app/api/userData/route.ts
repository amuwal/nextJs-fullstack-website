import getUserFromToken from "@/helpers/getUserFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import { connectDb } from "@/db/dbConnect";

connectDb();

export async function GET(req: NextRequest) {
  try {
    const userId = getUserFromToken(req).id;
    const user = await User.findOne({ _id: userId }).select("-password");
    return NextResponse.json({
        message: "user found",
        data: user
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
