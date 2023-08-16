import { NextResponse } from "next/server";

export async function POST() {
  try {
    const res = NextResponse.json({
      message: "logout successful",
      success: true,
    });
    // res.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });
    res.cookies.delete("token")
    return res
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
