import { NextResponse } from "next/server";
import { main } from "../api/feedback/route";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { comment } = await req.json();
    await main();
    const feedback = await prisma.feedback.create({ data: { comment } });
    return NextResponse.json({ message: "Success", feedback }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
