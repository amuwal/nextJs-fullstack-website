import getUserFromToken from "@/helpers/getUserFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import { connectDb } from "@/db/dbConnect";

connectDb();

export async function GET(req: NextRequest) {
  try {
    const userId = getUserFromToken(req).id;
    const loggedIdUser = await User.findOne({ _id: userId }).select(
      "-password"
    );
    const connections = loggedIdUser.connections;
    const allUsers = await User.find().select("-password");
    const suggestions = [];
    for (const user of allUsers) {
      if (
        user._id == userId ||
        (connections && connections.includes(user.email))  
      )  continue;
      suggestions.push(user);
      if (suggestions.length === 3) break
    }
    return NextResponse.json({
      message: "suggestions found",
      suggestions: suggestions,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
