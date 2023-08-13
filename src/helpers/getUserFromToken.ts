import { NextRequest } from "next/server";
import jwt from "jsonwebtoken"

export default function getUserFromToken(req: NextRequest) {
    try{
        const token = req.cookies.get("token")?.value || "";
        const decodedToken: any = jwt.verify(token, process.env.JWT_TOKEN_KEY!);
        return decodedToken;
    } catch (error:any) {
        throw new Error(error.message)
        return {}
    }
}