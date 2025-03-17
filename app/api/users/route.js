import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  const users = await prisma.user.findMany();
  console.log("users", users);
  return NextResponse.json(users);
}
