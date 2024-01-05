import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const token = await getToken({ req });
  console.log(token);
  // console.log(token.token);
  return NextResponse.json({ name: "Nafiul Hasan" });
}
